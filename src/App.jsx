import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./config/AppRoutes.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { UserProvider } from "./context/UserProvider.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Header />
                <AppRoutes />
                <Footer />
            </UserProvider>
                
        </BrowserRouter>
    )
}