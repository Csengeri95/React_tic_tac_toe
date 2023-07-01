Tic-Tac-Toe game

The above code is a React app that runs an tic-tac-toe application. The application consists of three pages, handled by the react-router-dom. The first page is a login interface, where you can log in to be taken to the launch game interface. The application saves the user's data to localStorage. In the new game interface, we can press a button and a popup modal will allow us to enter the basic game settings (player names, symbols, colors and mesh size). Doing this will take us to the game page. The application manages who the current player is, if one of the players wins, the application displays the name of the winner and allows you to start over or go back to the previous page.

I chose the React framework, because I think it was the easiest way to implement the architecture of the application I envisioned.
The application starts with the command 'npm start' after downloading the npm package.

Github Pages: https://csengeri95.github.io/React_tic_tac_toe/

Main packages i used:
- antd
- react-router-dom
- react-confetti-explosion
- mantine