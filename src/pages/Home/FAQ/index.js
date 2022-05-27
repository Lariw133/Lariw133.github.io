import React from "react";

import "../FAQ/faq.css";

//Logo
import logo from "../../../img/4.png";

//Perfil
import perfil from "../../../img/icon2.png";

export default function FAQ() {
    return (
      <div className="wrapper">
      {/*Inico do Menu no Header*/}
      <div className="header">
        <div className="header-menu">
          <div className="sidebar-btn">
            <i className="fas fa-bars" />
          </div>
          <div className="title"><img src={logo} style={{height: '250px', width: '250px', marginLeft: '50px'}} /></div><br />
          <ul>
            <li><a href="#"><i className="fa fa-language" aria-hidden="true" /></a></li>
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
              <a href="Loja de Pontos.html"><i className="fas fa-shopping-cart" /><span>Loja de Pontos</span></a>
            </div>
          </li>
          <li className="item" id="Configurações">
            <a href="#Configurações" className="menu-btn">
              <i className="fas fa-cog" /><span>Configurações <i className="fas fa-chevron-down drop-down" /></span>
            </a>
            <div className="sub-menu">
              <a href="Conta.html"><i className="fas fa-lock" /><span>Conta e Senha</span></a>
              <a href="Linguagem.html"><i className="fas fa-language" /><span>Linguagem</span></a>
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
          <div className="flex-container">
            <div className="flex-container">
              <div> 
                <div className="container">
                  <h2>Perguntas Frequentes</h2><br />
                  <div className="accordion">
                    <div className="accordion-item">
                      <button id="accordion-button-1" aria-expanded="false"><span className="accordion-title">Como funciona o sistema de gamificação?</span><span className="icon" aria-hidden="true" /></button>
                      <div className="accordion-content">
                        <p>Ao dar início em uma tarefa, o gestor inicia também uma contagem de tempo, na qual será base do sistema de pontuação, junto a pontuação de qualidade da tarefa dada pelo gestor e os respectivos membros. Essa pontuação irá para um sistema de rankeamento, disponível para visualização apenas pelos gestores. Os pontos poderão ser trocados por premiações criadas pelo gestor ou por acessórios para o avatar.
                        </p>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">O ranking pode gerar improdutividade ou rivalidade?</span><span className="icon" aria-hidden="true" /></button>
                      <div className="accordion-content">
                        <p>Não! O ranking será de visualização exclusiva do gestor. Sendo assim, não haverá comparações explicitas pelo sistema para os funcionários.</p>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">Como funciona o sistema de pontuação?</span><span className="icon" aria-hidden="true" /></button>
                      <div className="accordion-content">
                        <p>O sistema de pontuação funcionará como uma média ponderada, onde terá maior peso o tempo de tarefa, peso intermediário a avaliação do gestor e, o menor peso, a avaliação dos demais membros.</p>
                      </div>
                      <div className="accordion-item">
                        <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">Quem terá acesso ao resultado do feedback?</span><span className="icon" aria-hidden="true" /></button>
                        <div className="accordion-content">
                          <p>Tendo em vista as informações necessárias de satisfação do funcionário para com a empresa e pessoal, os feedbacks também serão de visualização exclusiva do gestor.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">Quais são os benefícios do sistema para os membros?</span><span className="icon" aria-hidden="true" /></button>
                      <div className="accordion-content">
                        <p>O sistema evidenciará a relação empresa e membro por meio dos feedbacks, onde a empresa ficará ciente do estado atual (mental, físico e profissional) do membro, além da opinião dele diante o tratamento da empresa. Se necessário, o membro poderá trocar seus pontos por benefícios à ele, além de melhorar a comuicação com o recurso do chat.</p>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button id="accordion-button-2" aria-expanded="false"><span className="accordion-title">O que posso fazer com a minha pontuação?</span><span className="icon" aria-hidden="true" /></button>
                      <div className="accordion-content">
                        <p>Sua pontuação pode ser utilizada para adquirir mais itens de customização para o seu avatar ou trocar por premiações criadas pelo gestor na aba "Loja de pontos".</p>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button id="accordion-button-3" aria-expanded="false"><span className="accordion-title">Como customizar o meu avatar?</span><span className="icon" aria-hidden="true" /></button>
                      <div className="accordion-content">
                        <p>O avatar pode ser customizado na aba de customização do avatar, onde estará disponível os itens desbloqueados pelo usuário até o momento.</p>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <button id="accordion-button-4" aria-expanded="false"><span className="accordion-title">Como eu posso trocar de linguagem?</span><span className="icon" aria-hidden="true" /></button>
                      <div className="accordion-content">
                        <p>Na aba "Linguagens", podendo selecionar qualquer linguagem disponível pelo sistema.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Fim do Container Principal*/}
        </div>
      </div>
    </div>
    );
}