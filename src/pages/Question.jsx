import { Link } from "react-router-dom"
import quizData from "../data/quizData.js";
import "@fortawesome/fontawesome-free/css/all.css";
import { useEffect, useState } from "react";

export default function Question() {
    const max = 5;
    const [ questionCount, setQuestionCount ] = useState(1);
    const [ askedQuestions, setAskedQuestions ] = useState([]);
    const [ isClicked, setIsClicked ] = useState(null);

    function randomiseQuestions() {
        const randomNumber = Math.floor(Math.random() * quizData.length);
        return quizData[randomNumber];
    }

    const [ question, setQuestion ] = useState(randomiseQuestions());

    useEffect( () => {
        setQuestion(randomiseQuestions());
        setIsClicked(null);
    }, [questionCount])


    function userGuess(id) {
        console.log(isClicked);
        if (isClicked === null) {
            return {};
        }
        if (isClicked === question.answer) {
            return { backgroundColor: "green"};
        }
        else {
            return { backgroundColor: "red"};
        }
    }
    return (
         <main>
            <div className="questions-header">
                <span>Question {questionCount} of {max}</span>
            </div>
            <section>
                {
                    <section key={question.id}>
                        <p className="question">{question.question} </p>
                        <section className="options">
                            <button style={userGuess(question.options[0].id)} className="option" id={question.options[0].id} onClick={(e) => setIsClicked(e.target.id)}>{question.options[0].text}</button>
                            <button style={userGuess(question.options[1].id)} className="option" id={question.options[1].id} onClick={(e) => setIsClicked(e.target.id)}>{question.options[1].text}</button>
                            <button style={userGuess(question.options[2].id)} className="option" id={question.options[2].id} onClick={(e) => setIsClicked(e.target.id)}>{question.options[2].text}</button>
                            <button style={userGuess(question.options[3].id)} className="option" id={question.options[3].id} onClick={(e) => setIsClicked(e.target.id)}>{question.options[3].text}</button>
                        </section>
                    </section>
                }
                
            </section>
            
            <Link to={questionCount === max ? "/summary" : "/question"} >
                <button onClick={() => setQuestionCount(prev => prev + 1)}> 
                    {questionCount === max ? "Summary " : "Next Question"}
                    <i className="fa-solid fa-angle-right"></i>
                </button>
                
            </Link>
        </main>
    )
}