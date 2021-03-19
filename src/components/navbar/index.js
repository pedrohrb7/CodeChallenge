import logo from "./icons/logo.svg";
import user from "./icons/user.svg";
import search from "./icons/search.svg";
import applys from "./icons/applys.svg";
import bttmNotifyIcon from "./icons/bell.svg";

import "./navbar.css";

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand navbar-light nav-bar">
        <img src={logo} className="preparo-logo" alt="Preparo logo" />
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active"></li>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile/locationForm">
              Localização
            </Link>
          </li>
        </ul>
        <button className="btn my-2 my-sm-0 notification-icon">
          <i className="fas fa-bell fas-bell--icon"></i>
        </button>
        <button className="btn my-2 my-sm-0" type="submit">
          <Link to="/profile/profileForm">
            <img src={user} alt="Logged User" />
          </Link>
        </button>
      </nav>

      <nav className="bottom-menu nav-bar navbar fixed-bottom navbar-light">
        <div className="bottom-container container">
          <div className="row">
            <div className="menu-items-container">
              <div className="col-md-4 col-sm-4">
                <div className="menu-bottom-item">
                  <a
                    className="menu-bottom-link"
                    href="https://preparovc.com/vacanciesHome"
                  >
                    <img
                      className="search-icon"
                      src={search}
                      alt="Icone Pesquisar"
                    />
                    <span className="search-text">Explorar</span>
                  </a>
                </div>
              </div>

              <div className="col-md-4 col-sm-4">
                <div className="menu-bottom-item">
                  <a
                    className="menu-bottom-link"
                    href="https://preparovc.com/candidatosprocessos"
                  >
                    <img
                      className="applys-icon"
                      src={applys}
                      alt="Icone Incrições"
                    />
                    <span className="applys-text">Inscrições</span>
                  </a>
                </div>
              </div>

              <div className="col-md-4 col-sm-4">
                <div className="menu-bottom-item">
                  <a className="menu-bottom-link" href="#teste">
                    <img
                      className="bottom-notify-icon"
                      src={bttmNotifyIcon}
                      alt="Icone Notificações"
                    />
                    <span className="notify-text">Notificações</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
