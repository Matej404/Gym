import "./contact.css";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";

export default function Contact() {

    return(
        <div className="contact">
            <h1 className="contact-headline">CONTACT</h1>
            <div className="contact-container">
                <div className="contact-information-container">
                    <div className="contact-information">
                        <div className="icon">
                            <BsFillTelephoneOutboundFill />
                        </div>
                        <p>+447759730283</p>
                    </div>
                    <div className="contact-information">
                        <div className="icon">
                            <HiOutlineMail />
                        </div>
                        <p>timnewton@gmail.com</p>
                    </div>
                    <div className="contact-information">
                        <div className="icon">
                            <ImLocation />
                        </div>
                        <p>240 Blackfriars Road SE1 8BF</p>
                    </div>
                </div>
                    <div className="contact-form-container">
                        <form>
                            <div className="form-grup">
                                <label for="name">Your Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your name" />
                            </div>
                            <div className="form-grup">
                                <label>Your E-mail</label>
                                <input type="email" id="email" name="email" placeholder="Enter your E-mail" />
                            </div>
                            <div className="form-grup">
                                <label for="message">Your Message</label>
                                <textarea id="message" name="message" rows="6" cols="30" placeholder="Enter Your message" />
                            </div>
                            <button type="submit" className="btn-submit">Submit</button>
                        </form>
                    </div>
                </div>
        </div>
    )
}