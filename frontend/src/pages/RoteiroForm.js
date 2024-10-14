import React, { useState } from 'react';
import axios from 'axios';

const RoteiroForm = () => {
  const [nomeCliente, setNomeCliente] = useState('');
  const [emailCliente, setEmailCliente] = useState('');
  const [telefoneCliente, setTelefoneCliente] = useState('');
  const [conteudo, setConteudo] = useState('');

  const enviarRoteiro = async () => {
    try {
      const res = await axios.post('http://localhost:5000/roteiros/enviar', {
        nomeCliente,
        emailCliente,
        telefoneCliente,
        conteudo,
      });
      alert('Roteiro enviado com sucesso!');
    } catch (err) {
      alert('Erro ao enviar roteiro');
    }
  };

  return (

    <div className='mainContainer'>
      <div className={'card'}>
        <div className={'titleContainer'}>
          <div>Enviar roteiro</div>
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            className={'inputBox'}
            type="text"
            placeholder="Nome"
            value={nomeCliente}
            onChange={e => setNomeCliente(e.target.value)} />
            <br />
          <input
            className={'inputBox'}
            type="email"
            placeholder="Email"
            value={emailCliente}
            onChange={e => setEmailCliente(e.target.value)} />
            <br />
          <input
            className={'inputBox'}
            type="text"
            placeholder="Telefone"
            value={telefoneCliente}
            onChange={e => setTelefoneCliente(e.target.value)} />
            <br />
          <textarea
            className={'inputBox'}
            placeholder="Conteúdo do Roteiro"
            value={conteudo}
            onChange={e => setConteudo(e.target.value)} />
            <br />
          <input
            type='button'
            className={'inputButton'}
            onClick={enviarRoteiro}
            value='Enviar' />
        </div>
      </div>
    </div>
  );
};

export default RoteiroForm;