import React from "react";
import "./contact.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Marquee from ".././marquee/marquee"

export default props => (
    <>
        <section className="contact">
            <h3 className="contact__txt">
                <h4 className="contact__head">Hello.</h4>
                I'm working at an AI startup now and don't update this site. These are my only social media, and I don't check them:</h3>
            <div className="btn__contact--wrapper">
                <a target="_blank" rel="noopener noreferrer" href="https://are.na/yana"><button className="btn__contact">Are.Na</button></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ygev"><button className="btn__contact">GitHub</button></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ygev/"><button className="btn__contact">LinkedIn</button></a>
            </div>
        </section>
    </>
);  