import React from "react";
import "./contact.css";
import "../../css/normalize.css";
import "../../css/global.css";
import Marquee from ".././marquee/marquee"

export default props => (
    <>
        <section className="contact">
            <h3 className="contact__txt">
                <h4 className="contact__head">Hey!</h4>
                The robots.txt on this one is gnarly, so good job finding this website somehow. My life online is very unlisted, but I can be found in these web establishments:</h3>
            <div className="btn__contact--wrapper">
                <a target="_blank" rel="noopener noreferrer" href="https://are.na/yana"><button className="btn__contact">Are.Na</button></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/ygev"><button className="btn__contact">GitHub</button></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ygev/"><button className="btn__contact">LinkedIn</button></a>
            </div>
        </section>
    </>
);  