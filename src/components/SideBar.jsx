import React from 'react'
import Avatar from '../img/eu.jpg'
import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks'
import Information from './Information'
import Curriculo from '../img/CV.pdf'

const SideBar = () => {
  return (
    <aside id='sidebar'>
      <img src={Avatar} alt="Gabriel Abreu" />
      <p className='title'>Desenvolvedor Frontend</p>
      <SocialNetworks/>
      <Information/>
      <a href={Curriculo} className='btn' download="Curriculo">Download do Curriculo</a>
    </aside>
  )
}

export default SideBar