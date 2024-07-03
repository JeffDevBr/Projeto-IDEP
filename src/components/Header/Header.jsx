import "./index.scss"
import idepLogo from "../../assets/img/idep logo.png"
import menu from "../../assets/img/icon-menu.svg"
import lupa from "../../assets/img/lupa.svg"
import instagram from "../../assets/img/icon-instagram.svg"
import youtube from "../../assets/img/icon-youtube.svg"
import facebook from "../../assets/img/icon-facebook.svg"

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
                            <ul>
                                <li><a className="btn-primary-fill">Login</a></li>
                                <li><a><img className="social"  src={instagram} alt="Icon Instagram" /></a></li>
                                <li><a><img className="social"  src={youtube} alt="Icon Youtube" /></a></li>
                                <li><a><img className="social"  src={facebook} alt="Icon Facebook" /></a></li>
                            </ul>
                        </nav>

                        <button type="button" className="btn-menu"><img src={menu} alt="Icon menu" /></button>
                    </div>
                </div>

                <nav className="links">
                    <ul>
                        <li><a>Home</a></li>
                        <li><a>Produto</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Sobre Nós</a></li>
                        <li><a>Contato</a></li>
                    </ul>
                </nav>
            </header>
        </section >
    )
}

export { Header }