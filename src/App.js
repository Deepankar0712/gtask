import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Register from './components/Register';
import { Login } from './components/Login';
import { useState } from 'react';

function App() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <div>
      <Landing login={login} setLogin={setLogin} register={register} setRegister={setRegister} />
    </div>
  );
}

export default App;
