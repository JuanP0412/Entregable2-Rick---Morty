import Dialog from '@mui/material/Dialog'
import './CharacterDetail.css'

const CharacterDetail = ({ character, onClose }) => {
    if (!character) return null

    const colorBadge = {
        'Alive': 'badge-alive',
        'Dead': 'badge-dead',
        'unknown': 'badge-unknown'
    }

    return (
        <Dialog
            open={Boolean(character)}
            onClose={onClose}
            maxWidth="sm"
            fullWidth
            sx={{
                '& .MuiDialog-paper': {
                    backgroundColor: '#16213e',
                    border: '1px solid #97ce4c',
                    borderRadius: 3,
                    overflow: 'hidden',
                },
                '& .MuiBackdrop-root': {
                    backgroundColor: 'rgba(0, 0, 0, 0.85)'
                }
            }}
        >
            <div className='detail-img-wrap'>
                <img src={character.image} alt={character.name} className='detail-img' />
                <button className='detail-close' onClick={onClose}>✕</button>
            </div>

            <div className='detail-body'>
                <h2 className='detail-name'>{character.name}</h2>

                <span className={`detail-badge ${colorBadge[character.status]}`}>
                    {character.status}
                </span>

                <div className='detail-grid'>
                    <div className='detail-item'>
                        <p className='detail-label'>Especie</p>
                        <p className='detail-value'>{character.species}</p>
                    </div>
                    <div className='detail-item'>
                        <p className='detail-label'>Género</p>
                        <p className='detail-value'>{character.gender}</p>
                    </div>
                    <div className='detail-item'>
                        <p className='detail-label'>Origen</p>
                        <p className='detail-value'>{character.origin?.name}</p>
                    </div>
                    <div className='detail-item'>
                        <p className='detail-label'>Ubicación</p>
                        <p className='detail-value'>{character.location?.name}</p>
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default CharacterDetail