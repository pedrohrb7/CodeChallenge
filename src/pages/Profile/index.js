import React from "react";

import profilImg from "./user.svg";
import "./profile.css";

const Profile = () => {
  return (
    <main>
      <div className="container">
        <div className="profile-content bg-container main-content main-content--shadow">
          <div className="row">
            <div className="col-lg-6 col-md-6 profile-titles">
              <h2 className="profile-title">Foto de perfil</h2>
              <p className="profile-subtitle">
                Adicione uma foto em seu perfil
              </p>
            </div>
            <div className="img-content col-lg-6 col-md-6">
              <img
                src={profilImg}
                className="profile-img"
                alt="Imagem de perfil"
              />
              <div className="input-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="input-profile-img"
                  />
                  <input
                    accept="application/jpg"
                    id="input-file"
                    type="file"
                  ></input>
                  <label htmlFor="input-profile-img">Carregar Foto</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="email-section bg-container main-content--shadow">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-sm-12 email-titles">
              <h2 className="profile-title">Email</h2>
              <p className="profile-subtitle">Você pode alterar seu email</p>
            </div>
            <div className="col-md-6 col-lg-6 ">
              <form className="form-content-profile">
                <div className="form-group">
                  <label>
                    Email <span className="asterisk"> *</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="email a ser alterado"
                  />
                  <button className="updt-email-btn btn btn-primary">
                    Alterar email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="instruction-section bg-container main-content main-content--shadow">
          <div className="row">
            <div className="col-md-6 instruction-titles">
              <h2 className="profile-title">Instruções</h2>
              <p className="profile-subtitle">
                Preencha seus dados de perfil. Sempre mantenha seu telefone
                atualizado.
              </p>
            </div>
            <div className="col-md-6 instruction-fields">
              <form className="form-content">
                <div className="form-group">
                  <label>
                    Nome <span className="asterisk"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite seu nome"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Sobrenome <span className="asterisk"> *</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Digite seu sobrenome"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Telefone <span className="asterisk"> *</span>
                  </label>
                  <input
                    maxLength="11"
                    name="phone"
                    type="text"
                    className="form-control"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="links-section bg-container main-content main-content--shadow">
          <div className="row">
            <div className="col-md-6 col-sm-12 personal-links-titles">
              <h2 className="profile-title">Links Pessoais</h2>
              <p className="profile-subtitle">
                Compartilhe seu perfil de outras plataformas aqui.
              </p>
            </div>
            <div className="col-md-6 col-sm-12 form-links-group">
              <form className="form-content">
                <div className="form-group">
                  <label>Github</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="https://github.com/asdfgh"
                  />
                </div>
                <div className="form-group">
                  <label>Behance</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="https://www.behance.net/asdfgh"
                  />
                </div>
                <div className="form-group">
                  <label>Linkedin</label>
                  <input
                    maxLength="11"
                    name="phone"
                    type=""
                    className="form-control"
                    placeholder="https://linkedin.com/in/asdfgh"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="form-btn">
          <button className="send-btn" type="submit">
            Enviar
          </button>
        </div>
      </div>
    </main>
  );
};

export default Profile;
