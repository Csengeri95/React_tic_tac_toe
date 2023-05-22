import { useContext } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { GameSettingsContext } from "../contexts/GameSettingsContexts";


export default function Content({ routes }) {

    const location = useLocation()

    const { gameSettings } = useContext(GameSettingsContext)

    const gameRoute = routes.filter(a => a.path === '/game')
    const hasPlayerNames = gameRoute && gameSettings.player1Name && gameSettings.player2Name;

    if (!hasPlayerNames && location.pathname !== '/home') {
        return <Navigate to="/home" />
    }

    return (
        <Routes location={location} key={location.pathname} >
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    )
}