import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';

const config = require('../package.json')

function App() {

  useEffect(() => {
    document.title = config.title
  }, [])




  return (
    <div className="app">
      <Home />
    </div>
  );
}

export default App;
