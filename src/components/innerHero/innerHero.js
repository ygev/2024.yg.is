import React from "react";
import "./innerHero.css";
import "../../css/normalize.css";
import "../../css/global.css";

export default props => (
    <>
        <section className="hero innerHero">
            <figure className="hero__img">
                <img alt="" className="inner__img--limiter" src={props.img} />
            </figure>
        </section>
    </>
);
