import "./style.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Features from "./features/Features";
import About from "./about/About";
import Contact from "./contact/Contact";

export default function Main() {

    return(
        <div>
            <Navbar />
            <div id="home" />
            <Home />
            <div id="features" />
            <Features />
            <div id="about" />
            <About />
            <div id="contact" />
            <Contact />
        </div>
    )
}