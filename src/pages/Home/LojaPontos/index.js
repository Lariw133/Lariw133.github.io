import React from "react";
import "../LojaPontos/LojaPontos.css";

//Logo
import logo from "../../../img/4.png";

//Perfil
import perfil from "../../../img/icon2.png";

//Imagens loja de pontos
import avatar001 from "../../../img/AvatarMaker001.png";
import avatar002 from "../../../img/AvatarMaker002.png";
import avatar013 from "../../../img/AvatarMaker013.png";


export default function LojaPontos() {
    return(
      <div className="wrapper">
      {/*Inico do Menu no Header*/}
      <div className="header">
        <div className="header-menu">
          <div className="sidebar-btn">
            <i className="fas fa-bars" />
          </div>
          <div className="title"><img src={logo} alt='' style={{height: '250px', width: '250px', marginLeft: '50px'}} /></div><br />
          <ul>
            <li><a href="index.html"><i className="fa fa-home" /></a></li>
            <li><a href="Login.html"><i className="fas fa-power-off" /></a></li>
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
          <ul className="cards">
            <li className="cards_item">
              <div className="card">
                <div className="card_image"><img src={avatar001} alt='' /></div>
                <div className="card_content">
                  <h2 className="card_title">Avatar #001</h2>
                  <p className="card_text">Demo de Imagem de Avatar Customizavel</p>
                  <button className="btn card_btn">Comprar</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image"><img src={avatar002} alt='' /></div>
                <div className="card_content">
                  <h2 className="card_title">Avatar #002</h2>
                  <p className="card_text">Demo de Imagem de Avatar Customizavel</p>
                  <button className="btn card_btn">Comprar</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image"><img src={avatar013} alt='' /></div>
                <div className="card_content">
                  <h2 className="card_title">Avatar #013</h2>
                  <p className="card_text">Demo de Imagem de Avatar Customizavel</p>
                  <button className="btn card_btn">Comprar</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image"><img src={avatar001} alt='' /></div> 
                <div className="card_content">
                  <h2 className="card_title">Avatar #025</h2>
                  <p className="card_text">Demo de Imagem de Avatar Customizavel</p>
                  <button className="btn card_btn">Comprar</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image"><img src={avatar002} alt='' /></div>
                <div className="card_content">
                  <h2 className="card_title">Avatar #111</h2>
                  <p className="card_text">Demo de Imagem de Avatar Customizavel</p>
                  <button className="btn card_btn">Comprar</button>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image"><img src={avatar013} alt='' /></div>
                <div className="card_content">
                  <h2 className="card_title">Avatar #007</h2>
                  <p className="card_text">Demo de Imagem de Avatar Customizavel</p>
                  <button className="btn card_btn">Comprar</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}
