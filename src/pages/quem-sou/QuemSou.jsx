import React from 'react'
import Navigation from '../../components/navigation'
import photo from '../../assets/images/foto.png'
import './quem-sou.css'
import curriculo from '../../assets/documents/curriculo.pdf'


const QuemSou = () => {
    return (
        <>
            <Navigation />       
            <section className="container-quem-sou">
                <div className="content-quem-sou">
                     <div className="quem-sou-text">
                        <h1 className="title-quem-sou">&#60;Quem Sou /&gt;</h1>
                        <p>
                            Olá, meu nome é <strong>Ronaldo Santana</strong>, tenho 24 anos, resido em São Paulo/Zona Leste
                            e sou <strong>Desenvolvedor Front-End</strong>. Atualmente eu sou recém formado em Análise
                            e Desenvolvimento de Sistemas na Universidade Cruzeiro do Sul.
                            <br />
                            Durante o periodo da faculdade eu comecei a prestar mais atenção nos detalhes
                            de cada elemento de uma interface web e assim fui me apaixonando
                            pelo desenvolvimento front end. Desde então tento me desenvolver cada vez mais
                            como dev front end desde a parte criação da UI ao desenvolvimento.
                        </p>
                        <div className="curriculo">
                            <a href={curriculo} download="Curriculo_Ronaldo_Front_End"> Baixar CV</a>
                        </div>
                     </div>
                     <div className="quem-sou-photo">
                         <img src={photo} alt="Minha foto"/>
                     </div>
                </div>
            </section>
        </>
    )
}

export default QuemSou
