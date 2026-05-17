import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./config/AppRoutes.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <AppRoutes />
            <Footer />
        </BrowserRouter>
    )
}