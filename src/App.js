import { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Game from './pages/Game'
import { MantineProvider } from '@mantine/core';
import { GameSettingsContext, GameSettingsContextDefaults } from './contexts/GameSettingsContexts'
import { BrowserRouter as Router } from 'react-router-dom';
import Content from './components/Content';
const config = require('../package.json')

function App() {

  const [gameSettings, setGameSettings] = useState(GameSettingsContextDefaults.value)

  useEffect(() => {
    document.title = config.title
  }, [])

  const pages = [
    //  { name: 'home', path: '/home', element: <Home /> },
    { name: 'game', path: '/game', element: <Game /> },

  ]



  console.log(gameSettings)
  return (
    <GameSettingsContext.Provider value={{ gameSettings, setGameSettings }} >
      <MantineProvider>
        <div className="app">
          <Router>
            <Content routes={pages} />
          </Router>
        </div>
      </MantineProvider>
    </GameSettingsContext.Provider>
  );
}

export default App;
