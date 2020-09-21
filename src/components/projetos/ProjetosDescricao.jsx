import React from 'react'
import './projetosDescricao.css'

const ProjetosDescricao = (props) => {
    return (
        <>
            <section className="container-projetos-descricao">
                <div className="content-projetos-descricao">
                    <h1>{props.title}</h1>
                    <p className="descricao">{props.descricao}</p>
                    <p className="text-edit">
                        Data de Criação
                        <div>{props.data}</div>
                    </p>

                    <p className="text-edit">
                        Skills
                        <div>{props.skills}</div>
                    </p>
                    
                    <a href={props.link} className="link-project">Veja o projeto</a>

                </div>
            </section>
        </>
    )
}

export default ProjetosDescricao