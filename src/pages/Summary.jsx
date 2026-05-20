import { Link } from "react-router-dom"
import { UserContext } from "../context/UserProvider"
import { useContext } from "react";

export default function Summary() {
    const { userName } = useContext(UserContext);

    return (
        <>
            <p> { userName } </p>
            <Link to="/">
                <button>Home Page</button>
            </Link>
        </>
    )
}