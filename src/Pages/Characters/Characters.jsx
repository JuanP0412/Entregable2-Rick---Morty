import { useState, useEffect } from 'react'
import './Characters.css'
import '../../App.css'

//Components
import CardCharacter from '../../Components/CardCharacter/CardCharacter'
import Pagination from '../../Components/Pagination/Pagination'
import Loading from '../../Components/Loading/Loading'
import SearchName from '../../Components/SearchName/SearchName'
import CharacterDetail from '../../Components/CharacterDetail/CharacterDetail'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedCharacter, setSelectedCharacter] = useState(null)

  useEffect(() => {
    setLoading(true)
    setPage(1)
  }, [search])

  useEffect(() => {
    setLoading(true)

    const name = search ? `&name=${search}` : ''

    fetch(`https://rickandmortyapi.com/api/character?page=${page}${name}`)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results)
        setTotalPages(data.info.pages)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
        setLoading(false)
      })
  }, [page, search])

  return (
    <div className='containerPage Characters'>

      <SearchName search={search} setSearch={setSearch} />

      {loading && <Loading />}

      {characters.length > 0 && !loading && (
        <>
          {characters.map(character => (
            <CardCharacter
              key={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              image={character.image}
              onClick={() => setSelectedCharacter(character)} />
          ))}
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )
      }
      <CharacterDetail
        character={selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
      />
    </div>
  )
}

export default Characters
