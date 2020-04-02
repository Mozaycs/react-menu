import React from 'react';
import './App.css';
import './Hello.css';
function Hello() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };

  return <div className="HelloBox">Hello, {formatName(user)}!</div>;
}
export default Hello;
