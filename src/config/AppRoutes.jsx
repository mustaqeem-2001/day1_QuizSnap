import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import QuestionPage from "../pages/QuestionPage.jsx";
import Summary from "../pages/Summary.jsx";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/question" element={<QuestionPage />} />
            <Route path="/summary" element={<Summary />} />
        </Routes>
    )
}