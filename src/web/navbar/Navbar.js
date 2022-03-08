import "./navbar.css";
import logo from "./logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

export default function Navbar() {

    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} />
            </div>
            <div className="mobile-icon">
                <FaBars />
            </div>
            <ol className="nav-menu">
                <li className="nav-link">
                    <Link className="nav-link" to="home" smooth={true} duration={1000} >
                        HOME
                    </Link>
                </li>
                <li className="nav-link">
                    <Link className="nav-link" to="features" smooth={true} duration={1000} >
                        FEATURES
                    </Link>
                </li>
                <li className="nav-link">
                    <Link className="nav-link" to="offer" smooth={true} duration={1000} >
                        OFFER
                    </Link>
                </li>
                <li className="nav-link">
                    <Link className="nav-link" to="about" smooth={true} duration={1000} >
                        ABOUT
                    </Link>
                </li>
                <li className="nav-link">
                    <Link className="nav-link" to="contact" smooth={true} duration={1000} >
                        CONTACT
                    </Link>
                </li>
            </ol>
        </div>
    )
}