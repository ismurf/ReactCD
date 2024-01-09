import './header.css';
import logo from '../images/logo.png';
//import bannerhead from './bannerhead.png';
function Header(){
    return(
        <div className="banner">
            {/*<img src=  {bannerhead} alt="circuitos" className="circuitos"/>*/}
            <div className="logo">
            <img  src= {logo} alt="monzalvo lawyers" className="logotipo"/>
            </div>
            
            <nav className="menu">
                <ul className="upperMenu">
                    <li><a href="">Servicios</a></li>
                    <li><a href="">Quiénes Somos</a></li>
                    <li><a href="">Contacto</a></li>
                    <li><a href="">FAQ</a></li>
                </ul>
            </nav>

            
       </div>


    )
}

export default Header;