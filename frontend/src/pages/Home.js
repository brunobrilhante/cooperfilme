import React from 'react';

const Home = () => {
  return (
    <div className="landing-page">
      <h1>Bem-vindo ao Cooperfilme!</h1>
      <p>O Cooperfilme é um sistema de gerenciamento de roteiros de filmes que permite aos usuários criar, editar e visualizar roteiros de forma fácil e eficiente.</p>
      <div className="cards-container">
        <div className="card">
          <h2>Funcionalidades</h2>
          <ul>
            <li> - Crie e edite roteiros de forma fácil e eficiente</li>
            <li> - Veja todos os roteiros inseridos no sistema</li>
            <li> - Pesquise e encontre roteiros por status, cliente ou data de envio</li>
            <li> - Edite e atualize roteiros em tempo real</li>
          </ul>
        </div>
        <div className="card">
          <h2>Benefícios</h2>
          <ul>
            <li> - Aumente a produtividade e eficiência no gerenciamento de roteiros</li>
            <li> - Mantenha seus roteiros seguros e protegidos</li>
            <li> - Colabore com outros usuários em tempo real</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;