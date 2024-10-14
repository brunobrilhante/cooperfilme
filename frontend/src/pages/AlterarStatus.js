import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AlterarStatus = () => {
  const [id, setId] = useState('');
  const [status, setStatus] = useState('');
  const [token, setToken] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [ids, setIds] = useState([]);
  const [roteiro, setRoteiro] = useState({});

  useEffect(() => {
    const tokenStorage = localStorage.getItem('token');
    if (tokenStorage) {
      setToken(tokenStorage);
    }
    axios.get('http://localhost:5000/roteiros')
      .then(response => {
        const ids = response.data.map(roteiro => roteiro.id);
        setIds(ids);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  const mudarStatus = async () => {
    try {
      const headers = {
        'Authorization': token,
        'Content-Type': 'application/json'
      };
      const response = await axios.put(`http://localhost:5000/roteiros/${id}/status`, {
        novoStatus: status
      }, { headers });
      setMensagem(response.data.message);
      const roteiroResponse = await axios.get(`http://localhost:5000/roteiros/${id}`);
      setRoteiro(roteiroResponse.data);
    } catch (error) {
      setMensagem(error.response.data.error);
    }
  };

  return (
    <div className='mainContainer'>
      <div className='card'>
        <div className={'titleContainer'}>
          <div>Alterar Status do Roteiro</div>
        </div>
        <br />
        <div className={'inputContainer'}>
          <select className={'inputBox'} value={id} onChange={handleId}>
            <option value="">Selecione o ID do Roteiro</option>
            {ids.map(id => (
              <option key={id} value={id}>{id}</option>
            ))}
          </select>
          <br />
          <select className={'inputBox'} value={status} onChange={handleStatus}>
            <option value="AGUARDANDO_ANALISE">Aguardando análise</option>
            <option value="EM_ANALISE">Em análise</option>
            <option value="AGUARDANDO_REVISAO">Aguardando revisão</option>
            <option value="EM_REVISAO">Em revisão</option>
            <option value="AGUARDANDO_APROVACAO">Aguardando aprovação</option>
            <option value="APROVADO">Aprovado</option>
            <option value="RECUSADO">Recusado</option>
          </select>
          <br />
          <input type="button" className={'inputButton'} onClick={mudarStatus} value={'Alterar'} />
        </div>
        <p>{mensagem}</p>
        {roteiro && (
          <div>
            <h4>Roteiro Alterado</h4>
            <p>ID: {roteiro.id}</p>
            <p>Nome: {roteiro.nomeCliente}</p>
            <p>Conteúdo: {roteiro.conteudo}</p>
            <p>Status: {roteiro.status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlterarStatus;