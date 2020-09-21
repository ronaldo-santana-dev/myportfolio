import React from 'react'
import './projetosImage.css'

const ProjetosImage = (props) => {
    return (
        <>
            <section className="container-projetos-image" style={{backgroundImage: "linear-gradient(to bottom right, " + props.gradientPrimary + "," + props.gradientSecondary + ")"}}>
                <div className="content-projetos-image">
                    <img src={props.image} alt="site"/>
                </div>
            </section>
        </>
    )
}

export default ProjetosImage
