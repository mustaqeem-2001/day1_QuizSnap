import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

export default function Summary() {
    const { userName, correctCount, askedQuestions } = useContext(UserContext);

    return (
        <>
            <p> { userName } </p>
            <p> { correctCount } </p>
            <div> 
                { askedQuestions.map(function(item, index) {
                    return (
                        <p key={index} style={{ color: item.isCorrect ? "green" : "red" }}>
                            {item.isCorrect ? "✓" : "✗"} {item.text} 
                        </p>
                    )
                })} 
            </div>
            <Link to="/">
                <button>Home Page</button>
            </Link>
        </>
    )
}