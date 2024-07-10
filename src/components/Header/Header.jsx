import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';
import idepLogo from '../../assets/img/log2.png';
import menuIcon from '../../assets/img/icon-menu.svg';
import lupa from '../../assets/img/lupa.svg';
import closeIcon from '../../assets/img/icon-close.svg';
import { BannerPrincipal } from '../BannerPrincipal/BannerPrincipal';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    closeDrawer();
  }, [location]);

  return (
    <section>
      <div id="drawer" className={isOpen ? 'opened' : ''}>
        <div className="overlay" onClick={toggleDrawer} data-drawer="toggle"></div>
        <div className="body">
          <header>
            <a href="#">
              <img className="logo" src={idepLogo} alt="Logo Idep" />
            </a>
            <button type="button" onClick={closeDrawer} className="btn-close" data-drawer="close">
              <img src={closeIcon} alt="Icon close" />
            </button>
          </header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Produtos">Produtos</Link></li>
              <li><Link to="/Blog">Blog</Link></li>
              <li><Link to="/Sobre">Sobre Nós</Link></li>
              <li><Link to="/Contato">Contato</Link></li>
            </ul>
          </nav>
          <footer>
            <nav>
              <ul className="ul-btn">
                <li><a className="btn-primary-fill login">Cadastrar</a></li>
                <li><a className="btn-primary-fill login">Login</a></li>
              </ul>
            </nav>
            <nav>
              <ul className="ul-social">
                <li><a><i className="fa-brands fa-instagram"></i></a></li>
                <li><a><i className="fa-brands fa-facebook"></i></a></li>
                <li><a><i className="fa-brands fa-linkedin"></i></a></li>
              </ul>
            </nav>
          </footer>
        </div>
      </div>

      <BannerPrincipal />

      <header className="header">
        <div className="back">
          <div className="menu container">
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
                  <li><a className="btn-primary-fill login">Cadastrar</a></li>
                  <li><a className="btn-primary-fill login">Login</a></li>
                  <li><a><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a><i className="fa-brands fa-facebook"></i></a></li>
                  <li><a><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
              </nav>
              <button type="button" onClick={toggleDrawer} className="btn-menu" data-drawer="open">
                <img src={menuIcon} alt="Icon menu" />
              </button>
            </div>
          </div>
        </div>
        <nav className="links">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Produtos">Produtos</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Sobre">Sobre Nós</Link></li>
            <li><Link to="/Contato">Contato</Link></li>
          </ul>
        </nav>
      </header>
    </section>
  );
};

export { Header };
