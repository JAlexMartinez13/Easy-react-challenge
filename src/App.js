import { useState } from 'react';
import HiddenComponent from './hidden';
import './App.css';

function App() {
  const [login, setLogin] = useState(false);
  
  const isLoggedIn = true

  return (
    <div className="App">
      <header className="App-header">

      <h1>{login ? 'Welcome Back!' : 'Please Log in'}
      </h1>
      {login
      ?
       
        <>
       <button
       onClick={()=> setLogin(!true)}
       >Log Out</button>

      <button onClick={()=>{ alert('Malware Installed'); }}>Free stuff</button>
        </>

        :
        <button
        onClick={()=> setLogin(true)}
        >Login</button>
 
      }
      {login && <HiddenComponent/>}
      </header>
    </div>
  );
}

export default App;
