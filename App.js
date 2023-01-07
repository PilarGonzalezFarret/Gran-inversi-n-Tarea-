import react from 'react';
import './App.css';

import PersonCards from './components/PersonCards',

function App() {
  return (
    <div className="App">
      <PersonCards firstName='Jane' lastName='Doe' age={54} hairColor='Black' />
      <PersonCards firstName='John' lastName='Smith' age={88} hairColor='Brown' />
      <PersonCards firstName='Millard' lastName='Fillmore' age={50} hairColor='Brown' />
      <PersonCards firstName='Maria' lastName='Smith' age={54} hairColor='Black' />
    </div>
  );
}

export default App;
