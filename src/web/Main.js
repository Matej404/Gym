import "./style.css";
import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Features from "./features/Features";

export default function Main() {

    return(
        <div>
            <Navbar />
            <div id="home" />
            <Home />
            <div id="features" />
            <Features />
        </div>
    )
}