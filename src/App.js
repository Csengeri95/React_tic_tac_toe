import { useEffect, useState } from 'react';
import './App.css';
import { MantineProvider } from '@mantine/core';
import { GameSettingsContext, GameSettingsContextDefaults } from './contexts/GameSettingsContexts'
import { HashRouter as Router } from 'react-router-dom';
import Content from './components/Content';
import { UserContext, UserContextDefaults } from './contexts/UserContext';
import { pages } from './utils/Constants';
const config = require('../package.json')

function App() {

  const [gameSettings, setGameSettings] = useState(GameSettingsContextDefaults.value)
  const [user, setUser] = useState(UserContextDefaults.value)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    document.title = config.title
  }, [])


  useEffect(() => {
    if (localStorage.getItem('tic_tac_toe') !== null) {
      setUser(JSON.parse(localStorage.getItem('tic_tac_toe')))
    }
    setInitialized(true)
  }, [])

  useEffect(() => {
    if (initialized) {
      localStorage.setItem('tic_tac_toe', JSON.stringify(user))
    }
  })



  //console.log(gameSettings)
  console.log(user)
  return (
    <UserContext.Provider value={{ user, setUser }} >
      <GameSettingsContext.Provider value={{ gameSettings, setGameSettings }} >
        <MantineProvider>
          <div className="app">
            <Router>
              <Content routes={pages} />
            </Router>
          </div>
        </MantineProvider>
      </GameSettingsContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
