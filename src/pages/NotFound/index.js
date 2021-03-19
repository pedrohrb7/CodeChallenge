import React from "react";

import robot from "../../imgs/robot.svg";
import "./notFound.css";

const Home = () => {
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-sm-4 not-found-text">
            <h2 className="not-found-title">Ops!!</h2>
            <p className="not-found-sub-title">Página não encontrada.</p>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-4">
            <img
              src={robot}
              alt="Robo - Pagina não encontrada"
              className="robot"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
