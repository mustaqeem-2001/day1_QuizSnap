import { Link } from "react-router-dom"
import Questions from "../components/Questions.jsx";

export default function QuestionPage() {
    return (
         <>
            <h1>Questions Page</h1>
            <Questions />
            <Link to="/summary">
                <button>Summary Page</button>
            </Link>
        </>
    )
}