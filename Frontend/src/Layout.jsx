import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function Layout() {
    return (
        <div className="site-wrapper">
            <Header />

            <main className="site-main">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}