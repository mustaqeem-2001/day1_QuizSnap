import { BrowserRouter } from "react-router-dom";
import Routes from "./config/AppRoutes.jsx";
import AppRoutes from "./config/AppRoutes.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}