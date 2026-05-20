import { Link, useSearchParams } from "react-router-dom"
import "@fortawesome/fontawesome-free/css/all.css";
import { UserContext } from "../context/UserProvider";
import { useContext, useState } from "react";

export default function Home() {
    const { userName, setUserName } = useContext(UserContext);
    const [ inputValue, setInputValue ] = useState("");

    return (
        <main>
            <div className="container">
                <div className="total-questions">
                    <i className="fa-solid fa-list-check"></i>
                    <p className="mt">25</p> 
                    <p className="fc-light fs">Questions</p>                      
                </div>
                <div className="options">
                    <i className="fa-solid fa-bolt"></i>
                    <p className="mt">4</p>
                    <p className="fc-light fs">Options each</p>
                </div>
                <div className="score">
                    <i className="fa-regular fa-star"></i>
                    <p className="mt">Score</p>
                    <p className="fc-light fs">Tracked</p>
                </div>
            </div>
            <fieldset className="name-fieldset fc-light">
                <label htmlFor="userName" className="name-lebel">ENTER YOUR NAME </label>
                <input type="text" placeholder="Mustaqeem" className="name-input" id="userName" onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
                <small className="name-helper-text">Your name will appear on the results screen</small>
            </fieldset>
            <Link to="/question" className="button-link">
                <button onClick={() => setUserName(inputValue)}>
                    <i className="fa-solid fa-bolt btn-bolt-style"></i>
                    Start
                </button>
            </Link>
        </main>
    )
}