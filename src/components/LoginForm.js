import React, { useState } from 'react';

const LoginForm = ({ onLogin, onSwitchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div>
      <img src="https://imgur.com/O3tywQj.png" alt="Logo" className="logo" />
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="pulse">Iniciar Sesión</button>
      </form>
      <p className="text-white">
        ¿No tienes una cuenta?{' '}
        <button className="pulse" onClick={onSwitchToRegister}>Regístrate aquí</button>
      </p>
    </div>
  );
};

export default LoginForm;