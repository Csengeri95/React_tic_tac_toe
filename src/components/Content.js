import { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { GameSettingsContext } from "../contexts/GameSettingsContexts";
import { UserContext } from "../contexts/UserContext";


export default function Content({ routes }) {

    const location = useLocation()
    const navigate = useNavigate()

    const { gameSettings } = useContext(GameSettingsContext)
    const { user } = useContext(UserContext)


    const hasPlayer = gameSettings.player1Name !== undefined && gameSettings.player2Name !== undefined

    useEffect(() => {
        if (user === null && location.pathname !== '/') {
            navigate('/');
        }
        else if (user !== null && location.pathname === '/') {
            navigate('/home');
        } else if (!hasPlayer && location.pathname === '/game') {
            navigate('/home');
        }
    }, [user, navigate, location.pathname, hasPlayer]);

    return (


        <Routes location={location} key={location.pathname}>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Routes>
    )
}