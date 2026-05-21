import { Link } from "react-router-dom";
import quizData from "../data/quizData.js";
import "@fortawesome/fontawesome-free/css/all.css";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserProvider.jsx";

export default function Question() {
    const max = 5;
    const [ questionCount, setQuestionCount ] = useState(1);
    const [ isClicked, setIsClicked ] = useState(null);
    const { correctCount, setCorrectCount, setAskedQuestions } = useContext(UserContext);

    function randomiseQuestions() {
        const randomNumber = Math.floor(Math.random() * quizData.length);
        return quizData[randomNumber];
    }

    const [ question, setQuestion ] = useState(randomiseQuestions());

    function handleClick(optionId) {
        setIsClicked(optionId);
        
        const isRight = Number(optionId) === question.answer || optionId === question.answer;
        
        if (isRight) {
            setCorrectCount(prev => prev + 1);
        }

        // ONLY record the question in history when an option is actually clicked!
        setAskedQuestions(prev => [
            ...prev, 
            { text: question.question, isCorrect: isRight }
        ]);
    }

    useEffect(() => {
        setQuestion(randomiseQuestions());
        setIsClicked(null);
    }, [questionCount]);

    function userGuess(id) {
        if (isClicked === null) return {};
        const stringId = String(id);
        if (stringId === String(isClicked)) {
            return String(isClicked) === String(question.answer) ? { backgroundColor: "green"} : { backgroundColor: "red"};
        }
        if (stringId === String(question.answer) && String(isClicked) !== String(question.answer)) {
            return { backgroundColor: "green"};
        }
        return {};
    }

    return (
         <main>
            <div className="questions-header">
                <span>Question {questionCount} of {max}</span>
            </div>
            <section key={question.id}>
                <p className="question">{question.question} </p>
                <div className="options">
                    {question.options.map((option) => (
                        <button 
                            key={option.id}
                            style={userGuess(option.id)} 
                            className="option" 
                            id={option.id} 
                            onClick={(e) => handleClick(e.target.id)}
                            disabled={isClicked !== null}
                        >
                            {option.text}
                        </button>
                    ))}
                </div>
            </section>            
            <Link to={questionCount === max ? "/summary" : "/question"} >
                <button onClick={() => setQuestionCount(prev => prev + 1)}> 
                    {questionCount === max ? "Summary " : "Next Question"}
                    <i className="fa-solid fa-angle-right"></i>
                </button>
            </Link>
        </main>
    );
}