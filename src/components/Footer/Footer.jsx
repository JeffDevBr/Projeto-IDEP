import './index.scss'
import logo from '../../assets/img/idep logo.png'

const Footer = () => {
    return (
        <section className='section-footer'>
            <footer className='footer container'>
                <div>
                    <a>
                    <img className='logo' src={logo} alt="" />
                    </a>
                    <p>Lorem ipsum dolor sit, amet consectetur
                        adipisicing elit. Maiores alias cum</p>
                </div>
                <div>
                    <h3>Links Importantes</h3>
                    <nav>
                        <ul>
                            <li><a>Home</a></li>
                            <li><a>Produto</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Sobre</a> Nos</li>
                            <li><a>Contato</a></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <h3>Links Rápidos</h3>
                    <nav>
                        <ul>
                        <li><a>Home</a></li>
                            <li><a>Produto</a></li>
                            <li><a>Blog</a></li>
                            <li><a>Sobre</a> Nos</li>
                            <li><a>Contato</a></li>
                        </ul>
                    </nav>
                </div>

                <div>
                    <h3>Endereço</h3>
                    <p><i className="fa-solid fa-location-dot"></i> Av. Tiradentes</p>
                    <p><i className="fa-solid fa-phone"></i> (69) 0000-0000</p>

                    <ul className='social'>
                        <li><a><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a><i className="fa-brands fa-facebook"></i></a></li>
                        <li><a><i className="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div >
            </footer >
        </section >
    )
}

export { Footer }