import React from 'react'
import Navbar from './Componentes/Navbar/Navbar'
import Home from './Componentes/Home/Home'
import About from './Componentes/About/About'
import Myskill from './Componentes/MySkill/Myskill'
import Project from './Componentes/Project/Project'
import Contact from './Componentes/Contact/Contact'
import Footer from './Componentes/Footer/Footer'

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Home/>
      <About/>
      <Myskill/>
      <Project/>
      <Contact/>
      <Footer/>
    </React.Fragment>
  )
}

export default App