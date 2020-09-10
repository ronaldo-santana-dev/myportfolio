import React from 'react'
import './boxEspecialidade.css'


const BoxEspecidalidade = (props) => {  
    return (
        <div className="box-container">
            <img src={props.icon} alt="especialidade"/>
            <p>{props.name}</p>
        </div>
    )
}

export default BoxEspecidalidade