import React from 'react'
import LogoImg from '../assets/icons/navigation/icon-logo.png'
import HamburguerImg from '../assets/icons/navigation/menu.svg'
import CloseImg from '../assets/icons/navigation/close.svg'
import './navigation.css'
import { Link } from 'react-router-dom'
const Navigation = () => {
    const [active, setActive] = React.useState(false)
    const hamburguer = React.useRef()
    const linkMobile = React.useRef()

    const closeMenu = () => {
        if(linkMobile){
            hamburguer.current.src = HamburguerImg
            setActive(false)
        }
    }
    const handleClick = () => {
        const janela = window.innerWidth;
        if(janela < 850){
            setActive(!active)
            if(active === true){
                hamburguer.current.src = HamburguerImg 
                
            }else {
                hamburguer.current.src = CloseImg
            }
        }
    }
    return (
        <header className="menu-container">
            <div className="menu-content">
                <div className="menu-logo">
                    <Link to="/" className="name link-mobile">
                        <img src={LogoImg} alt="logo"/>
                        RONALDO SANTANA
                    </Link>
                </div>
                <nav className="menu-nav">
                    <ul>
                        <li><Link to="/quem-sou" className="link spacing">QUEM SOU</Link></li>
                        <li><Link to="/especialidades" className="link spacing">ESPECIALIDADES</Link></li>
                        <li><Link to="/projetos" className="link spacing">PROJETOS</Link></li>
                        <li><Link to="/contato" className="link">CONTATO</Link></li>
                    </ul>
                    <div className="menu-mobile">
                        <img src={HamburguerImg} alt="hamburguer" ref={hamburguer} onClick={handleClick}/>
                    </div>
                </nav>
            </div>
            { active ? 
                <nav className="nav-mobile-content">
                    <ul>
                        <li><Link to="/quem-sou" ref={linkMobile} onClick={closeMenu}>QUEM SOU</Link></li>
                        <li><Link to="/especialidades" ref={linkMobile} onClick={closeMenu}>ESPECIALIDADES</Link></li>
                        <li><Link to="/projetos" ref={linkMobile} onClick={closeMenu}>PROJETOS</Link></li>
                        <li><Link to="/contato" ref={linkMobile} onClick={closeMenu}>CONTATO</Link></li>
                    </ul>
                </nav>
            : null }
        </header>
    )
}
export default Navigation