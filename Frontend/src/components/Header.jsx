import { Link } from "react-router-dom";
import candleImg from '../assets/round-icons-iL73arBgl90-unsplash.png';
import './Header.css'

export default function Header() {
    return (
        <header>
            <div className="top-header">
                <img src={candleImg} alt="site logo" />
                <nav id="main-navigation">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/read'}>Read</Link>
                    <Link to={'/upload'}>Upload</Link>
                </nav>
            </div>
        </header>
    )
}