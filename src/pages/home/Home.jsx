import React from 'react'
import Navigation from '../../components/navigation'
import NotebookImg from '../../assets/images/notebook.png'
import './home.css'
const Home = () => {
    const subtitle = React.useRef();
    const name = React.useRef();

    React.useEffect(() => {

        function typeWriter(elemento){
          const textoArray = elemento.innerHTML.split('');
          elemento.innerHTML = '';
          textoArray.forEach((letra, i) => {
            setTimeout(() => {
              elemento.innerHTML += letra;
            }, 65 * i);	
          });
        }
          typeWriter(subtitle.current)
          typeWriter(name.current)
  
      }, [])
    return (
        <>
            <Navigation />       
            <section className="home-container">
                <div className="home-content">
                    <div className="apresentation-text" >
                        <p className="hello" >Olá, eu sou</p>
                        <p className="my-name" ref={name}>Ronaldo Santana</p>
                        <p className="devfront" ><span>&#60;</span>Desenvolvedor<br />&nbsp;&nbsp; Front end <span>/&gt;</span></p>
                        <p className="subtitle" id="subtitle" ref={subtitle}>Eu desenvolvo sites responsivos e landing pages
                            utilizando as melhores tecnologias do mercado.
                        </p>
                    </div>

                    <div className="notebook-img">
                    <img src={NotebookImg} className="notebook" alt="logo"/>  
                    </div>
                </div>                 
            </section>
        </>
    )
}

export default Home
