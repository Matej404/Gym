import "./navbar.css";
import logo from "./logo.png";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", changeWidth);

        return () => {
            window.removeEventListener("rsize", changeWidth);
        }
    }, [])

    return(
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <img src={logo} />
                </div>
                <div className="mobile-icon" onClick={() => handleToggleMenu()}>
                    <FaBars />
                </div>
                {(toggleMenu || screenWidth > 500) && (
                <ol className="nav-menu">
                    <li className="nav-link">
                        <Link className="nav-link" to="home" smooth={true} duration={1000} onClick={() => handleToggleMenu()} >
                            HOME
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link className="nav-link" to="features" smooth={true} duration={1000} onClick={() => handleToggleMenu()} >
                            FEATURES
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link className="nav-link" to="offer" smooth={true} duration={1000} onClick={() => handleToggleMenu()} >
                            OFFER
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link className="nav-link" to="about" smooth={true} duration={1000} onClick={() => handleToggleMenu()} >
                            ABOUT
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link className="nav-link" to="contact" smooth={true} duration={1000} onClick={() => handleToggleMenu()} >
                            CONTACT
                        </Link>
                    </li>
                </ol>)}
            </div>
        </div>
    )
}