import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

//Components
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'

//Pages
import Characters from './Pages/Characters/Characters'
import FiltrarEspecie from './Pages/FiltrarEspecie/FiltrarEspecie'
import ErrorPage from './Pages/ErrorPage/ErrorPage'

function App() {

  return (
    <Router>
      <Header/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Characters/>}></Route>
        <Route path='/characters/:specie' element={<FiltrarEspecie/>}></Route>
        <Route path='*' element={<ErrorPage
          codigo="404"
          mensaje="Esta dimensión no existe"
          btnRuta="/"
          btnTexto="Volver al portal"
        />}></Route>
      </Routes>
    </Router>
  )
}

export default App
