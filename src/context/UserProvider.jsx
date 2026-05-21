import { useContext, useState, createContext } from "react";

export const UserContext = createContext();

export function UserProvider( { children }) {
    const [ userName, setUserName] = useState("");
    const [ correctCount, setCorrectCount ] = useState(0);
    const [ askedQuestions, setAskedQuestions] = useState([]);

    return (
        <UserContext.Provider value={ { userName, setUserName , correctCount, setCorrectCount, askedQuestions, setAskedQuestions } }>
            { children }
        </UserContext.Provider>
    )
}