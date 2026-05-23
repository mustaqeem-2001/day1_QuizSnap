import { Link } from "react-router-dom";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

export default function Summary() {
    const { userName, correctCount, askedQuestions, setCorrectCount, setAskedQuestions } = useContext(UserContext);

    function resetContext() {
        setCorrectCount(0);
        setAskedQuestions([]);
    }
    return (
        <>
            <p> { userName } </p>
            <p> Your score</p>
            <p>{(Number(correctCount) / 5) * 100}%</p>
            <p>You got { correctCount } out of 5 correct</p>
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
                <button onClick={resetContext}>Home Page</button>
            </Link>
        </>
    )
}