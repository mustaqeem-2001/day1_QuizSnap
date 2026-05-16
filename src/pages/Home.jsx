import { Link } from "react-router-dom"

export default function Home() {
    // const navigate = useNavigate();

    // function questionsPage() {
    //     navigate('/questions');
    // }

    return (
        <>
            <h1>Home Page</h1>
            <Link to="/question">
                <button>Questions Page</button>
            </Link>
        </>
    )
}