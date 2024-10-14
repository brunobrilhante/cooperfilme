import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [emailError, setEmailError] = useState('')
  const [senhaError, setSenhaError] = useState('')

  const handleLogin = async () => {
    try {
      if ('' === email) {
        setEmailError('Insira seu e-mail')
        return
      }

      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        setEmailError('Insira um e-mail válido')
        return
      }

      if ('' === senha) {
        setSenhaError('Insira uma senha')
        return
      }

      const res = await axios.post('http://localhost:5000/auth/login', { email, senha });
      localStorage.setItem('token', res.data.token);
      alert('Login realizado com sucesso!');
      window.location.href = '/dashboard';
    } catch (err) {
      alert('Falha no login');
    }
  };

  return (
    <div className='mainContainer'>
      <div className={'card'}>
        <div className={'titleContainer'}>
          <div>Login</div>
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            value={email}
            placeholder='Digite seu e-mail'
            onChange={e => setEmail(e.target.value)}
            className={'inputBox'}
            type='email'
          />
          <label className='errorLabel'>{emailError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            value={senha}
            placeholder='Digite sua senha'
            onChange={e => setSenha(e.target.value)}
            className={'inputBox'}
            type='password'
          />
          <label className='errorLabel'>{senhaError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
          <input className={'inputButton'} type="button" onClick={handleLogin} value={'Entrar'} />
        </div>
      </div>
    </div>
  );
};

export default Login;
