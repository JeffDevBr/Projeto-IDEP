import "./index.scss"
import { Link } from 'react-router-dom'
import idepLogo from "../../assets/img/idep logo2.png"
import menu from "../../assets/img/icon-menu.svg"
import lupa from "../../assets/img/lupa.svg"


import { BannerPrincipal } from "../BannerPrincipal/BannerPrincipal"

const Header = () => {
    return (
        <section>
            <BannerPrincipal />

            <header className="header container">
                <div className="menu">

                    <div>
                        <a><img className="logo" src={idepLogo} alt="Logo Idep" /></a>
                    </div>

                    <div className="box-two">
                        <form>
                            <div>
                                <input type="text" placeholder="Encontre seu produto" />
                                <img src={lupa} alt="Lupa" />
                            </div>
                        </form>

                        <nav className="social-menu">
                            <ul className="social">
                                <li><a className="btn-primary-fill login">Login</a></li>
                                <li><a><i className="fa-brands fa-instagram"></i></a></li>
                                <li><a><i className="fa-brands fa-facebook"></i></a></li>
                                <li><a><i className="fa-brands fa-linkedin"></i></a></li>
                            </ul>
                        </nav>

                        <button type="button" className="btn-menu"><img src={menu} alt="Icon menu" /></button>
                    </div>
                </div>

                <nav className="links">
                    <ul>
                        <li><Link to={'/'}>Home</Link> </li>
                        <li><Link to={'/Produtos' }> Produtos</Link></li>
                        <li> <Link to={'/Blog'}>Blog</Link></li>
                        <li> <Link to={'/Sobre'}>Sobre Nós</Link></li>
                        <li><Link to={'/Contato'}> Contato </Link></li>
                    </ul>
                </nav>
            </header>
        </section >
    )
}

export { Header }