import "./about.css";
import Gym from "./gym.jpeg";

export default function About() {

    return(
        <div className="about">
            <h2 className="about-headline">ABOUT US</h2>
            <div className="about-container">
                <div className="about-img">
                    <img src={Gym} />
                </div>
                <div className="about-content">
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown 
                    printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining 
                    essentially unchanged. It was popularised in the 1960s with 
                    the release of Letraset sheets containing Lorem Ipsum passages, 
                    and more recently with desktop publishing software like Aldus 
                    PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="more-about-content">
                        <div className="more-about trainer">Meet your trainer</div>
                        <div className="more-about gym">Wiev gym photos</div>
                    </div>
                </div>
            </div>
        </div>
    )
}