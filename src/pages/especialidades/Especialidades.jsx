import React from 'react'
import Navigation from '../../components/navigation'
import BoxEspecialidade from '../../components/BoxEspecialidade'

import './especialidades.css'

import htmlIcon from '../../assets/icons/conheciments/html5.svg'
import cssIcon from '../../assets/icons/conheciments/css.svg'
import javascriptIcon from '../../assets/icons/conheciments/javascript.svg'
import reactIcon from '../../assets/icons/conheciments/reactjs.svg'
import boostrapIcon from '../../assets/icons/conheciments/bootstrap.svg'
import npmIcon from '../../assets/icons/conheciments/npm.svg'
import gitIcon from '../../assets/icons/conheciments/git.svg'
import figmaIcon from '../../assets/icons/conheciments/figma.svg'
import uiIcon from '../../assets/icons/conheciments/ux-ux.svg'


const Especialidades = () => {
    return (
        <>
             <Navigation />
            <section className="container-especialidades">
                <h1 className="title-especialidades">&#60;Especialidades /&gt;</h1>
                <div className="content-boxes">
                    <div className="box">
                        <BoxEspecialidade icon={htmlIcon} name="HTML"/>
                    </div>

                    <div className="box">
                        <BoxEspecialidade icon={cssIcon} name="CSS"/>
                    </div>

                    <div className="box">
                        <BoxEspecialidade icon={javascriptIcon} name="Javascript"/>
                    </div>

                    <div className="box">
                        <BoxEspecialidade icon={reactIcon} name="ReactJS" />
                    </div>

                    <div className="box">
                        <BoxEspecialidade  icon={boostrapIcon} name="Bootstrap/Reactstrap"/>
                    </div>

                    <div className="box">
                        <BoxEspecialidade icon={npmIcon} name="NPM"/>
                    </div>
                    <div className="box">
                        <BoxEspecialidade icon={gitIcon} name="Git"/>
                    </div>
                    <div className="box">
                        <BoxEspecialidade icon={uiIcon} name="UI/UX"/>
                    </div>
                    <div className="box">
                        <BoxEspecialidade icon={figmaIcon} name="Figma"/>
                    </div>
                </div> 
            </section>
            
        </>
    )
}

export default Especialidades
