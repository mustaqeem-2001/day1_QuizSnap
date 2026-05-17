import { Link } from "react-router-dom"
import "@fortawesome/fontawesome-free/css/all.css";

export default function Home() {
    // const navigate = useNavigate();

    // function questionsPage() {
    //     navigate('/questions');
    // }

    return (
        <main>
            <div className="container">
                <div className="total-questions">
                    <i class="fa-solid fa-list-check"></i>
                    <p className="mt">25</p> 
                    <p>Questions</p>                      
                </div>
                <div className="options">
                    <i className="fa-solid fa-bolt"></i>
                    <p className="mt">4</p>
                    <p>Options each</p>
                </div>
                <div className="score">
                    <i class="fa-solid fa-star"></i>
                    <p className="mt">Score</p>
                    <p>Tracked</p>
                </div>
            </div>
            <fieldset className="name-fieldset">
                <label htmlFor="userName" className="name-lebel">ENTER YOUR NAME </label>
                <input type="text" placeholder="Mustaqeem" className="name-input" id="userName"/>
                <small className="name-helper-text">Your name will appear on the results screen</small>
            </fieldset>
            <Link to="/question">
                <button>
                    <i className="fa-solid fa-bolt"></i>
                    Start
                </button>
            </Link>
        </main>
    )
}