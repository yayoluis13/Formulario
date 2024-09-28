export const handleRegister = (username, password, address, phone, users, setUsers, passwords, setPasswords, userDetails, setUserDetails, setIsRegistered) => {
    if (!users.includes(username)) {
      setUsers([...users, username]);
      setPasswords({ ...passwords, [username]: password });
      setUserDetails({ ...userDetails, [username]: { address, phone } });
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      setIsRegistered(false);
    } else {
      alert('El usuario ya existe. Por favor, inicia sesión.');
    }
  };
  
  export const handleLogin = (username, password, users, passwords, setCurrentUser) => {
    if (users.includes(username)) {
      if (passwords[username] === password) {
        setCurrentUser(username);
        alert(`¡Bienvenido, ${username}!`);
      } else {
        alert('Contraseña incorrecta. Inténtalo de nuevo.');
      }
    } else {
      alert('Usuario no encontrado. Por favor, regístrate.');
    }
  };