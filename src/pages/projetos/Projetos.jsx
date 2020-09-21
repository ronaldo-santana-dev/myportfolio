import React from 'react'

import Navigation from '../../components/navigation'
import ProjetosDescricao from '../../components/projetos/ProjetosDescricao'
import ProjetosImage from '../../components/projetos/ProjetosImage'

import portfolioImage from '../../assets/images/portfoliosite.png'
import scaleneImage from '../../assets/images/scalenesite.png'

import './projetos.css'
const Projetos = () => {
    return (
        <>
             <Navigation />
            <section className="container-projetos">
                    <h1 className="title-projetos">&#60;Projetos /&gt;</h1>
                <div className="content-projetos">
                 
                    <span className="site">
                        <ProjetosDescricao title="Projeto Ronaldo Santana" descricao="Meu site pessoal criado com objetivo de mostrar e divulgar meus trabalhos." data="18/09/2020" skills="HTML, CSS, Javascript, ReactJS" link="#"/>
                        <ProjetosImage className="imagem-projeto" gradientPrimary="#000533" gradientSecondary="#16148F" image={portfolioImage}/>
                    </span>

                    <span className="site">
                        
                        <ProjetosDescricao title="Projeto Fã Clube Scalene" descricao="Site de um fã clube criado com o objetivo de informar a história da banda, albuns e shows." data="18/06/2019" skills="HTML, CSS, Javascript e Bootstrap 4" link="https://scaleneonline.000webhostapp.com/#"/>
                        <ProjetosImage className="imagem-projeto" gradientPrimary="#000000" gradientSecondary="#2F2F30" image={scaleneImage}/>
                    </span>
                </div>
            </section>         
        </>
    )
}

export default Projetos
