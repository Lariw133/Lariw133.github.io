import React from "react";
import "../Home/home.css"
import perfil from "../../img/icon2.png";
import logo from "../../img/4.png";

export default function Home() {

  return (
          <div className="wrapper">
          <div className="header">
            <div className="header-menu">
              <div className="sidebar-btn">
                <i className="fas fa-bars" />
              </div>
              <div className="title"><img src={logo}  alt="teste" style={{height: '250px', width: '250px', marginLeft: '50px'}} /></div><br />
              <ul>
                <li><a href="#"><i className="fa fa-language" aria-hidden="true" /></a></li>
                <li><a href="/home"><i className="fa fa-home" /></a></li>
                <li><a href="/"><i className="fas fa-power-off" /></a></li>
              </ul>
            </div>
          </div>
          {/*Fim do menu no Header*/}
          {/*Inicio da Side Bar*/}
          <div className="sidebar">
            <div className="sidebar-menu">
              <center className="profile">
                <img src={perfil} alt="" />
                <p>*Nome do Usuario*</p>
              </center>
              <li className="item" id="Perfil">
                <a href="/perfil" className="menu-btn">
                  <i className="fas fa-user-circle" /><span>Perfil</span>
                </a>
              </li>
              <li className="item" id="Equipe">
                <a href="Equipe.html" className="menu-btn">
                  <i className="fas fa-users" /><span>Equipe</span>
                </a>
              </li>
              <li className="item" id="SemNome">
                <a href="#SemNome" className="menu-btn">
                  <i className="fa fa-gamepad" /><span>Gamificação <i className="fas fa-chevron-down drop-down" /></span>
                </a>
                <div className="sub-menu">
                  <a href="Ranking.html"><i className="fas fa-trophy" /><span>Ranking</span></a>
                  <a href="/lojapontos"><i className="fas fa-shopping-cart" /><span>Loja de Pontos</span></a>
                </div>
              </li>
              <li className="item" id="Configurações">
                <a href="#Configurações" className="menu-btn">
                  <i className="fas fa-cog" /><span>Configurações <i className="fas fa-chevron-down drop-down" /></span>
                </a>
                <div className="sub-menu">
                  <a href="Conta.html"><i className="fas fa-lock" /><span>Conta e Senha</span></a>
                </div>
              </li>
              <li className="item">
                <a href="/faq" className="menu-btn">
                  <i className="fas fa-info-circle" /><span>FAQ</span>
                </a>
              </li>
            </div>
          </div>
          {/*Fim da SideBar*/}
          {/*Inicio do Container principal*/}
          <div className="main-container">
            <div className="card">
            </div>
          </div>
          {/*Fim do Container Principal*/}
        </div>
  );
}