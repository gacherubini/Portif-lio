import React from 'react'

const Projetcs = () => {
  return (
    <section className='projects-container'>
      <h2>Projetos</h2>
      <h3>ADDICTION21</h3>
      <p>Desenvolvi um site de uma gravadora de música eletronica, com suas músicas, artistas,
        contato todas informações sobre essa gravadora é puxada de uma API REST, feita por mim
        utilizando as tecnologias, React, HTML, CSS, NodeJS, MongoDb.
      </p>
      <h3>SITE DE FILMES REACT</h3>
      <p>Desenvolvi um site de filmes interativo em React, com recursos de
        pesquisa avançada, detalhes abrangentes dos filmes e
        responsividade, além de integração da API TMDb, ultilizando React,
        HTML, CSS .
      </p>
      <h3>JOGO BOMBERMAN EM JAVA</h3>
      <p>Desenvolvi um jogo Bomberman em Java com níveis e inimigos
        desafiadores, onde o objetivo é coletar chaves para progredir.
        Oferece uma experiência envolvente e estratégica.
      </p>
      <a href="https://github.com/gacherubini" className='btn'>
        Ver Projetos
      </a>
    </section>
  )
}

export default Projetcs