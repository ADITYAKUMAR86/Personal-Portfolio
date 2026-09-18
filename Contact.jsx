import React from "react";

const Contact = () => {
    return (
        <div className="contactContainer">
            <h1 id="contact">Contact ME!!</h1>
            <div className="infoForm">
                <div className="pre">
                    <h4 id="pre">
                        Don't hesitate to reach out with any questions or ideas.
                        I'm here to listen, offer insights, and have enriching
                        discussions. Your message could spark something
                        wonderful-let's start a dialogue
                    </h4>
                </div>
                <div className="form">
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="subject" />
                    <input
                        type="text"
                        placeholder="Message"
                        className="message"
                    />
                    <div className="consent">
                        <input type="checkbox" />
                        <h6>
                             agree to the use of cookies and the processing of my entered data 
                             as described in the 
                            <a href="" style={{color: 'blue' , backgroundColor : 'white'}}> Cookie Policy</a> and <a href="" style={{color : 'blue', backgroundColor: "white"}}>Privacy Policy</a>
                        </h6>
                    </div>
                    <button id="send">send</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
