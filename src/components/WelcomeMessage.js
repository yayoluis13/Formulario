import React from 'react';

const WelcomeMessage = ({ currentUser, userDetails, onLogout }) => (
  <div className="welcome-message">
    <img src="https://i.imgur.com/O3tywQj.jpg" alt="Logo" className="logo" />
    <h1>Bienvenido, {currentUser}!</h1>
    <h2>Datos Personales</h2>
    <table>
      <tbody>
        <tr>
          <th>Dirección</th>
          <td>{userDetails.address}</td>
        </tr>
        <tr>
          <th>Número de Teléfono</th>
          <td>{userDetails.phone}</td>
        </tr>
      </tbody>
    </table>
    <button className="close" onClick={onLogout}>Salir</button>
  </div>
);

export default WelcomeMessage;