import { Link } from "react-router-dom"

export default function QuestionPage() {
    return (
         <>
            <h1>Questions Page</h1>
            <Link to="/summary">
                <button>Summary Page</button>
            </Link>
        </>
    )
}