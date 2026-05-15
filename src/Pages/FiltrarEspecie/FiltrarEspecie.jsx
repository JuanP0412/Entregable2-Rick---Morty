import { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import CardCharacter from '../../Components/CardCharacter/CardCharacter'
import '../Characters/Characters.css'
import Pagination from '../../Components/Pagination/Pagination'
import Loading from '../../Components/Loading/Loading'
import ErrorPage from '../ErrorPage/ErrorPage'

const FiltrarEspecie = () => {
  const { specie } = useParams()
  const [characters, setCharacters] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setPage(1)
  }, [specie])

  useEffect(() => {
    setError(false)
    setLoading(true)
    fetch(`https://rickandmortyapi.com/api/character?page=${page}&species=${specie}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(true)
          setCharacters([])
          setLoading(false)
          return
        }
        setCharacters(data.results)
        setTotalPages(data.info.pages)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching characters:', error);
        setLoading(false)
        setError(true)
      })
  }, [specie, page])

  return (
    <div className='containerPage Characters'>

      {loading && <Loading />}

      {error && !loading && (
        <ErrorPage
          codigo="404"
          mensaje="Especie no encontrada"
          btnRuta="/"
          btnTexto="Volver al portal"
        />)}
      {characters.length > 0 && !loading && !error && (
        <>
          {characters.map(character => (
            <CardCharacter
              key={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              image={character.image} />
          ))}
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )
      }
    </div>
  )
}

export default FiltrarEspecie
