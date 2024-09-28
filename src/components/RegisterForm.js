import React, { useState } from 'react';

const RegisterForm = ({ onRegister, onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneCode, setPhoneCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(username, password, address, `${phoneCode} ${phoneNumber}`);
  };

  return (
    <div>
      <img src="https://imgur.com/O3tywQj.png" alt="Logo" className="logo" />
      <h2>Registro</h2>
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
        <input
          type="text"
          placeholder="Dirección"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <select value={phoneCode} onChange={(e) => setPhoneCode(e.target.value)} style={{ marginRight: '10px', flexShrink: '0' }}>
            <option value="+58">VEN (+58)</option>
            <option value="+1">EE.UU. (+1)</option> 
            <option value="+44">Reino Unido (+44)</option> 
            <option value="+34">España (+34)</option> 
            <option value="+52">México (+52)</option> 
          </select>
          <input
            type="tel"
            placeholder="Número de Teléfono"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
            style={{ flexGrow: '1' }}
          />
        </div>
        <button className="pulse" type="submit">Registrar</button>
      </form>
      <p className="text-white">
        ¿Ya tienes una cuenta?{' '}
        <button className="pulse" onClick={onSwitchToLogin}>Inicia sesión aquí</button>
      </p>
    </div>
  );
};

export default RegisterForm;