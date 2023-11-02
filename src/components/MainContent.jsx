import React from 'react'
import '../styles/components/maincontent.sass'
import About from './About'
import Tecnologies from './Tecnologies'
import Projetcs from './Projetcs'


const MainContent = () => {
  return (
    <main id='main-content'>
      <About/>
      <Tecnologies/>
      <Projetcs/>
    </main>
  )
}

export default MainContent