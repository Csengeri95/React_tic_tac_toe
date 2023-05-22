import { useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import { MantineProvider } from '@mantine/core';

const config = require('../package.json')

function App() {

  useEffect(() => {
    document.title = config.title
  }, [])




  return (
    <MantineProvider>
      <div className="app">
        <Home />
      </div>
    </MantineProvider>
  );
}

export default App;
