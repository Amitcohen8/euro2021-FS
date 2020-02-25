import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import PlayerForm from './pages/PlayerForm.js'

function App() {
  const [email,setEmail] = useState('');
  const [name, setName] = useState('');
  return (
    <div className="App">
    <PlayerForm/>
    </div>
  );
}

export default App;
