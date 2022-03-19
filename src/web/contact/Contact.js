import "./contact.css";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ImLocation } from "react-icons/im";
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const isTextareaDisabled = message.length === 0;

    const handleSubmit = (e) => {
        e.preventDefault();
        setName();
        setEmail();
        setMessage();
    }

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
                        <form onSubmit={handleSubmit}>
                            <div className="form-grup">
                                <label for="name">Your Name</label>
                                <input type="text" id="name" name="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-grup">
                                <label>Your E-mail</label>
                                <input type="email" id="email" name="email" placeholder="Enter your E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-grup">
                                <label for="message">Your Message</label>
                                <textarea id="message" name="message" rows="6" cols="30" placeholder="Enter Your message" value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                            <button disabled={isTextareaDisabled} type="submit" className="btn-submit">Submit</button>
                        </form>
                    </div>
                </div>
        </div>
    )
}