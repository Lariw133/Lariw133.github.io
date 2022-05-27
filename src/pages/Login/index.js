import React, { useEffect } from "react";

import logo from "../../img/4.png"
import './login.css';

export default function Login() {
    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const container = document.querySelector(".container");
    
        sign_up_btn.addEventListener("click", () => {
            container.classList.add("sign-up-mode");
        });
    
        sign_in_btn.addEventListener("click", () => {
            container.classList.remove("sign-up-mode");
        });
    }, []);

    return (
        
          <div className="container">
            <div className="forms-container">
              <div className="signin-signup">
                {/* Parte do Login */}
                <form action="src/pages/Home/index.js" className="sign-in-form">
                  <h2 className="title">Entrar</h2>
                  <div className="input-field">
                    <i className="fas fa-user" />
                    <input type="text" placeholder="ID" />
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock" />
                    <input type="password" placeholder="Senha" />
                  </div>
                  <input type="submit" defaultValue="Login" className="btn solid" />
                  <div className="social-media">
                  </div>
                </form>
                {/* Parte do Registro */}
                <form action="#" className="sign-up-form" >
                  <h2 className="title">Se Cadastre </h2>
                  <div className="container2">
                    <div className="input-field">
                      <i className="fas fa-user" />
                      <input type="text" placeholder="Nome Completo" />
                    </div>
                    <div className="input-field">
                      <i className="fas fa-envelope" />
                      <input type="email" placeholder="Data de nascimento" />
                    </div>
                  </div>
                  <div className="container3">
                    <div className="input-field">
                      <i className="fas fa-user" />
                      <input type="CPF" placeholder="CPF" />
                    </div>
                    <div className="input-field">
                      <i className="fas fa-envelope" />
                      <input type="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="input-field">
                    <i className="fas fa-lock" />
                    <input type="password" placeholder="Senha" />
                  </div>
                  <input type="submit" className="btn" defaultValue="Confirmar" />
                  <div className="social-media">
                  </div>
                </form>
              </div>
            </div>
            <div className="panels-container">
              <div className="panel left-panel">
                <div className="content">
                  <h3>Novo Aqui ?</h3>
                  <p>
                    Seja bem vindo(a) à plataforma web que torna a realização de tarefas em equipe mais produtiva e divertida. Caso ainda não tenha uma conta, clique no botão abaixo.
                  </p>
                  <button className="btn transparent" id="sign-up-btn">
                    Cadastrar
                  </button>
                </div>
                <img src={logo} className="image" alt="" />
              </div>
              <div className="panel right-panel">
                <div className="content">
                  <h3>Já Faz Parte da Plataforma ?</h3>
                  <p>
                    Caso você já seja um usuário da Arrow, basta clicar no botão abaixo e relizar seu login. 
                  </p>
                  <button className="btn transparent" id="sign-in-btn">
                    Login
                  </button>
                </div>
                <img src={logo} className="image" alt="" />
              </div>
            </div>
          </div>
      );
}
