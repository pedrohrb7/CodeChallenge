import React from "react";

import "./home.css";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="main-title">informações pessoais</h2>
        <div className="main-content main-content--shadow">
          <h3 className="main-title title">instruções</h3>
          <hr className="separator" />
          <div className="content">
            <p>
              Para atualizar suas informações cadastrais, clique na barra
              vertical em:
            </p>
            <li>
              <ul>
                <i className="fas fa-user-circle fas-icon"></i> Para atualizar
                seu
                <strong>
                  {" "}
                  perfil<span className="asterisk">*</span>
                </strong>{" "}
                (nome, sobrenome, telefone, links pessoais).
              </ul>

              <ul>
                <i className="fas fa-map-marked-alt fas-icon"></i> Para
                atualizar sua{" "}
                <strong>
                  localização<span className="asterisk">*</span>
                </strong>{" "}
                (CEP, cidade, etc.).
              </ul>

              <ul>
                <i className="fas fa-address-card fas-icon"></i> Para preencher
                sua{" "}
                <strong>
                  identificação<span className="asterisk">*</span>
                </strong>{" "}
                (CPF, data de nascimento, etc.).
              </ul>

              <ul>
                <i className="fas fa-graduation-cap fas-icon"></i> Para
                atualizar sua{" "}
                <strong>
                  formação<span className="asterisk">*</span>
                </strong>{" "}
                (universidade, situação e curso).
              </ul>

              <ul>
                <i className="fas fa-paste fas-icon"></i> Para enviar seu{" "}
                <strong>currículo</strong>.
              </ul>

              <ul>
                <i className="fas fa-pencil-ruler fas-icon"></i>Para atualizar
                suas
                <strong> habilidades</strong> (conteúdos, assuntos, linguagens
                de programação, etc.).
              </ul>

              <ul>
                <i className="fas fa-book fas-icon"></i> Para atualizar suas
                <strong> experiências</strong> (estágios, trabalhos voluntários,
                intercâmbios, etc.).
              </ul>

              <ul>
                <i className="fas fa-medal fas-icon"></i>
                Para atualizar suas <strong> premiações</strong> (ex.:
                olimpíadas científicas).
              </ul>
            </li>
            <div className="footer-text">
              <p>
                Se sentir falta de algum campo, conte-nos por{"  "}
                <span>
                  <a
                    href="https://wa.me/5511934723784?text=Ol%C3%A1%2C+Preparo%21"
                    target="_blank"
                    rel="noreferrer"
                    className="wpp-link"
                  >
                    <i className="fab fa-whatsapp"></i> Whatappp
                  </a>{" "}
                </span>
                o que você gostaria de ver por aqui.
              </p>

              <p>
                Se tiver algum problema com preenchimento, alguma dúvida ou
                sugestão contate-nos também.
              </p>
            </div>

            <span className="footer">
              * Campos Obrigatórios para a candidatura em uma vaga.
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
