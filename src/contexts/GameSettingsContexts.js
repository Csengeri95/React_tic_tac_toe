import React from "react";


export const GameSettingsContextDefaults = {
    value: {
        player1Name: undefined,
        player2Name: undefined,
        selectedSymbol1: undefined,
        selectedSymbol2: undefined,
        selectedColor1: '#000000',
        selectedColor2: '#000000',
        selectedBoardSize: 100,
    },
    setValue: () => { }
}

export const GameSettingsContext = React.createContext(GameSettingsContextDefaults)