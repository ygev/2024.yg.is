import React from "react";
import "./marquee.css"
import "../../css/normalize.css"
import "../../css/global.css"
import Marquee from "react-fast-marquee";

export default function FooComponent() {
  var newPortfolio = <div className="marquee__prefix"> · THESSALONIANS 4:11 · QUIET LIFE HONEST WORK&#160;</div>
  const linkSpam = Array(1000).fill(newPortfolio);

  return (
    <Marquee style={{ color: "black" }} className="marquee__wrap" pauseOnHover={true} children={linkSpam} gradient={false} direction={"left"}>

    </Marquee>
  );
}