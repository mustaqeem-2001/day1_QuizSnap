import "@fortawesome/fontawesome-free/css/all.css";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { useLocation } from "react-router-dom";


export default function Header() {
     const location = useLocation();
     const { userName } = useContext(UserContext);
     const isSummary = location.pathname === "/summary";

     return (
        <header>
            <i className="fa-solid fa-brain"></i>
            <h1 className="title">{isSummary ? "Well done, " + userName + "!" : "QuizSnap"}</h1>
            <p className="subtitle fc-light">{isSummary ? "You've completed your questions" : "Test your React knowledge"}</p>
        </header>
    )
}