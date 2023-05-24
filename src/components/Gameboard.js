import { useContext, useState, useEffect } from "react"
import "../styles/Gameboard.css"
import Square from "./Square"
import { GameSettingsContext, GameSettingsContextDefaults } from "../contexts/GameSettingsContexts"
import ConfettiExplosion from 'react-confetti-explosion';
import { Button, Box, Flex } from '@mantine/core'
import { IconArrowBackUp, IconTicTac } from '@tabler/icons-react';
import { useNavigate } from "react-router-dom";


export default function Gameboard() {
    const { gameSettings, setGameSettings } = useContext(GameSettingsContext)

    const [square, setSquare] = useState(Array(gameSettings.selectedBoardSize).fill(""))
    //const [square, setSquare] = useState(Array(100).fill(""))
    //const [shape, setShape] = useState("O")


    const players = {
        first: {
            name: gameSettings.player1Name,
            symbol: gameSettings.selectedSymbol1,
            style: gameSettings.selectedColor1
        },
        second: {
            name: gameSettings.player2Name,
            symbol: gameSettings.selectedSymbol2,
            style: gameSettings.selectedColor2
        }
    }

    // const players = {
    //     first: {
    //         name: "Anna",
    //         symbol: "O",
    //         style: "red"
    //     },
    //     second: {
    //         name: "Levente",
    //         symbol: "X",
    //         style: "green"
    //     }
    // }
    const [shape, setShape] = useState(players.first)
    const [winner, setWinner] = useState(null)
    const [isExploiding, setIsExploiding] = useState(false)
    const [gameReset, setGameReset] = useState(false)
    const navigate = useNavigate()

    function reset() {
        setGameReset(true)
        let newSquare = Array(100).fill('')
        setSquare(newSquare)
        setIsExploiding(false)
        setShape(players.first)
        setWinner(null)
    }

    function resetContext() {
        setGameSettings(GameSettingsContextDefaults.value)
        navigate('/home')

    }


    function checkWinner() {

        let winningCombos = []

        if (gameSettings.selectedBoardSize === 100) {
            for (let row = 0; row <= 9; row++) {
                for (let col = 0; col <= 5; col++) {
                    winningCombos.push(Array.from({ length: 5 }, (_, i) => row * 10 + col + i));
                }
            }

            for (let col = 0; col <= 9; col++) {
                for (let row = 0; row <= 5; row++) {
                    winningCombos.push(Array.from({ length: 5 }, (_, i) => (row + i) * 10 + col))
                }
            }

            for (let row = 0; row <= 5; row++) {
                for (let col = 0; col <= 5; col++) {
                    winningCombos.push(Array.from({ length: 5 }, (_, i) => (row + i) * 10 + col + i));
                }
            }

            for (let row = 9; row >= 4; row--) {
                for (let col = 0; col <= 5; col++) {
                    winningCombos.push(Array.from({ length: 5 }, (_, i) => (row - i) * 10 + col + i));
                }
            }
        }
        else if (gameSettings.selectedBoardSize === 64) {
            for (let row = 0; row <= 7; row++) {
                for (let col = 0; col <= 3; col++) {
                    winningCombos.push(Array.from({ length: 5 }, (_, i) => row * 8 + col + i));
                }
            }


            for (let col = 0; col <= 7; col++) {
                for (let row = 0; row <= 3; row++) {
                    winningCombos.push(Array.from({ length: 5 }, (_, i) => (row + i) * 8 + col));
                }
            }

            for (let row = 0; row <= 3; row++) {
                for (let col = 0; col <= 3; col++) {
                    winningCombos.push(Array.from({ length: 5 }, (_, i) => (row + i) * 8 + col + i));
                }
            }


            for (let row = 7; row >= 4; row--) {
                for (let col = 0; col <= 3; col++) {
                    winningCombos.push(Array.from({ length: 5 }, (_, i) => (row - i) * 8 + col + i));
                }
            }

        }

        winningCombos.forEach(a => {
            let firstWins = a.every(element => square[element].symbol === players.first.symbol)
            let secondWins = a.every(element => square[element].symbol === players.second.symbol)

            if (firstWins) {
                setWinner(players.first.name)
                setIsExploiding(true)
            }
            if (secondWins) {
                setWinner(players.second.name)
                setIsExploiding(true)

            }
        })



    }


    useEffect(() => {
        checkWinner()
    }, [square])




    return (
        <div className="gameboard-container">
            {winner && isExploiding &&
                <div style={{ marginBottom: '1rem' }}>
                    <p style={{ fontSize: '1.8rem' }}> <span >{winner}</span> a győztes!</p>
                    <ConfettiExplosion
                        force={0.5}
                        duration={2200}
                        particleCount={100}
                        width={400}
                    />
                    <Flex gap="md" justify='center' >
                        <Box w={250} >
                            <Button
                                fullWidth
                                variant="gradient"
                                gradient={{ from: 'orange', to: 'green', deg: 60 }}
                                color="white"
                                radius="md"
                                type="reset"
                                size="md"
                                leftIcon={<IconArrowBackUp size={'0.9rem'} />}
                                onClick={resetContext}
                            >
                                Vissza az előző oldalra!
                            </Button>
                        </Box>

                        <Box w={140}>
                            <Button
                                color="red"
                                radius="md"
                                variant="white"
                                type="reset"
                                size="md"
                                leftIcon={<IconTicTac size={'1rem'} />}
                                onClick={reset}
                            >
                                Újrakezdés!
                            </Button>
                        </Box>
                    </Flex>
                </div>
            }

            <div className={`gameboard ${gameSettings.selectedBoardSize === 100 ? 'grid_10x10' : 'grid_8x8'}`}>
                {square.map((map, index) =>
                    <Square
                        key={index}
                        id={index}
                        players={players}
                        shape={shape}
                        setShape={setShape}
                        square={square}
                        setSquare={setSquare}
                        winner={winner}
                        gameReset={gameReset}
                        setGameReset={setGameReset}
                    />
                )}


            </div>
            {!winner &&
                <>
                    <p>

                        <span className="next">{shape.name} </span>
                        következik!
                    </p>

                    <Box>
                        <Button
                            color="red"
                            radius="md"
                            variant="white"
                            type="reset"
                            size="md"
                            style={{ marginLeft: '0.5rem' }}
                            leftIcon={<IconTicTac size={'1rem'} />}
                            onClick={reset}
                        >
                            Újrakezdés!
                        </Button>
                    </Box>

                </>
            }



        </div>
    )
}