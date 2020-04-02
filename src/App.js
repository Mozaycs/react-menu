import React from 'react';
import './App.css';
import Hello from './Hello';
import EssayForm from './Form';
import Header from './Header';
import MenuApp from './MenuApp';

function App() {
  return (
    <div className="App">
      <MenuApp />
      <header className="App-header"></header>

      <Header />
      <EssayForm />

      <p>
        <Hello />
      </p>
      <p></p>
    </div>
  );
}

export default App;
