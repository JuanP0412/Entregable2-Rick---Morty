import {useNavigate} from 'react-router-dom'
import './ErrorPage.css'
import ErrorGif from '../../assets/ErroPage.gif'


const ErrorPage = ({codigo, mensaje, btnRuta, btnTexto}) => {
  const navigate = useNavigate()

  return (
     <div className='error-container'>
      <img src={ErrorGif} alt={codigo} className='error-gif' />
      <h2 className='error-codigo'>{codigo}</h2>
      <p className='error-mensaje'>{mensaje}</p>
      <button className='error-btn' onClick={() => navigate(btnRuta)}>
        {btnTexto}
      </button>
    </div>
  )
}

export default ErrorPage