import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [roteiros, setRoteiros] = useState([]);
  const [filtro, setFiltro] = useState({
    status: '',
    createdAt: '',
    emailCliente: ''
  });

  useEffect(() => {
    axios.get('http://localhost:5000/roteiros')
      .then(response => {
        setRoteiros(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleFiltro = (e) => {
    setFiltro({ ...filtro, [e.target.name]: e.target.value });
  };

  const filtrarRoteiros = () => {
    const roteirosFiltrados = roteiros.filter(roteiro => {
      const status = filtro.status === '' || roteiro.status === filtro.status;
      const createdAt = filtro.createdAt === '' || roteiro.createdAt.includes(filtro.createdAt);
      const emailCliente = filtro.emailCliente === '' || roteiro.emailCliente.includes(filtro.emailCliente);
      return status && createdAt && emailCliente;
    });
    return roteirosFiltrados;
  };

  return (
    <div className="dashboard-container">
      <h1>Roteiros Cadastrados</h1>
      <div className="filtro-container">
        <label>
          Status:
          <select name="status" value={filtro.status} onChange={handleFiltro}>
            <option value="">Todos</option>
            <option value="AGUARDANDO_ANALISE">Aguardando análise</option>
            <option value="EM_ANALISE">Em análise</option>
            <option value="AGUARDANDO_REVISAO">Aguardando revisão</option>
            <option value="EM_REVISAO">Em revisão</option>
            <option value="AGUARDANDO_APROVACAO">Aguardando aprovação</option>
            <option value="APROVADO">Aprovado</option>
            <option value="RECUSADO">Recusado</option>
          </select>
        </label>
        <label>
          Data de Envio:
          <input type="date" name="createdAt" value={filtro.createdAt} onChange={handleFiltro} />
        </label>
        <label>
          Email:
          <input type="email" name="emailCliente" value={filtro.emailCliente} onChange={handleFiltro} />
        </label>
      </div>

      <div className="cards-container">        
        {filtrarRoteiros().map(roteiro => (
          <div key={roteiro.id} className="card">
            <h2>{roteiro.nomeCliente}</h2>
            <p>Id: {roteiro.id}</p>
            <p>E-mail: {roteiro.emailCliente}</p>    
            <p>Data de Criação: {roteiro.createdAt}</p>        
            <p>Conteúdo: {roteiro.conteudo}</p>
            <p>Status: <strong>{roteiro.status}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;