import { Link } from "react-router-dom"

export default function Summary() {
    return (
        <>
            <h1>Summary Page</h1>
            <Link to="/">
                <button>Home Page</button>
            </Link>
        </>
    )
}