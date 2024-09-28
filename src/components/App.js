import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import WelcomeMessage from './WelcomeMessage';
import { handleRegister, handleLogin } from '../utils/authUtils';

const App = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [users, setUsers] = useState([]);
  const [passwords, setPasswords] = useState({});
  const [userDetails, setUserDetails] = useState({});
  const [currentUser, setCurrentUser] = useState(null);

  const onRegister = (username, password, address, phone) => {
    handleRegister(username, password, address, phone, users, setUsers, passwords, setPasswords, userDetails, setUserDetails, setIsRegistered);
  };

  const onLogin = (username, password) => {
    handleLogin(username, password, users, passwords, setCurrentUser);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };

  return (
    <div>
      {currentUser ? (
        <WelcomeMessage 
          currentUser={currentUser}
          userDetails={userDetails[currentUser]}
          onLogout={handleLogout}
        />
      ) : isRegistered ? (
        <RegisterForm onRegister={onRegister} onSwitchToLogin={() => setIsRegistered(false)} />
      ) : (
        <LoginForm onLogin={onLogin} onSwitchToRegister={() => setIsRegistered(true)} />
      )}
    </div>
  );
};

export default App;