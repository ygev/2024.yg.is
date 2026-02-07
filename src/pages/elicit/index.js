import React from "react"
import SEO from '../../components/seo';
import Hero from "./images/hero.png";

import Glam1 from "./images/Glam1.png";
import Glam2 from "./images/Glam2.png";
import Glam3 from "./images/Glam3.png";
import Glam4 from "./images/Glam4.png";


import Fig1 from "./images/Fig1.gif";
import Fig2 from "./images/Fig2.png";
import Fig3 from "./images/Fig3.png";
import Fig4 from "./images/Fig4.gif";
import Fig5 from "./images/Fig5.png";
import Fig6 from "./images/Fig6.gif";
import Fig7 from "./images/Fig7.gif";
import Fig8 from "./images/Fig8.png";
import Fig9 from "./images/Fig9.png";


import "../../css/global.css"
import Header from "../../components/header/header"
import InnerHero from "../../components/innerHero/innerHero"
import InnerTxt from "../../components/innerTxt/innerTxt"
import Abstract from "../../components/abstract/abstract"
import Tracker from "../../components/tracker/tracker"
import List from "../../components/list/list"
import Paragraph from "../../components/paragraph/paragraph"
import Phase from "../../components/phase/phase"
import ImgFull from "../../components/imgFull/imgFull"
import ImgRight from "../../components/imgRight/imgRight"
import ImgLeft from "../../components/imgLeft/imgLeft"
import HowMightWe from "../../components/howMightWe/howMightWe"
import Issue from "../../components/issue/issue"
import More from "../../components/more/more"
import Contact from "../../components/contact/contact"
import Footer from "../../components/footer/footer"
import { Constants } from "../../constants"


class Index extends React.Component {
  render() {
    return (
      <div className="elicit">
        <SEO title="Elicit" description="" />
        <Header />
        <div className="hero__wrapper">
          <InnerHero img={Hero} />
          <InnerTxt heroCategory={Constants.elicit.heroCategory}
            heroYear={Constants.elicit.heroYear}
            heroDeliverable={Constants.elicit.heroDeliverable}
            heroTitle={Constants.elicit.heroTitle}
            heroSummary=""
          />
        </div>

        <Abstract glams={
          [
          ]
        }
          abstractRole="Product Designer"
          abstractTools="Multivariate Testing, Prototyping"
          abstractTime="2024 – Present"
          abstractBody="Elicit is an AI tool for scientific research with deep roots in an AI Safety research lab called Ought. I comprise 1 of the 2 people legally allowed to call this a design team. Covering a wide range, from running experiments with my analytics buddy, to thinking really hard about auditability of AI systems."
        />

        <Tracker phaseList={['ITERABILITY', 'SENSE-MAKING', 'GROWTH', 'CULTURE']}
          trackerHead={Constants.elicit.heroTitle} />
        <div id="p1">
          <Phase phaseTitle="Iterability" />
          <ImgLeft img={Fig1} padding="yes" imgNum="01" imgCaption="Favorite project from this era — the query suggester." />
          <Paragraph paragraphTitle="Facilitating Improvement Loops"
            paragraphBody="First of its kind at the time, my query suggester experience was [[one of the most impactful>https://x.com/Stammy/status/1892615079302209727 ]] results of this body of work." />
          <List listTitle="Questions you may want to ask me:" listType='ol'
            listItems={[
              "Do people prefer to iterate from outputs or perfect prompts?",
              "What is the Why Does It Suck framework?"
            ]} />
        </div>
        <div id="p2">
          <Phase phaseTitle="Sense-Making" />
          <ImgLeft img={Fig2} padding="" imgNum="02" imgCaption="Favorite project from this era — redesigning all control panels in Airtable." />
          <Paragraph paragraphTitle="App Building Experience"
            paragraphBody="Temporarily embedded on a core product team, I represented the Design Systems crew to help develop a best-in-class canvas interaction model and a corresponding component library for configuration panels. Launching in October 2023, it's [[featured on Airtable's blog>https://blog.airtable.com/new-app-building-features/]]." />
          <List listTitle="Questions you may want to ask me:" listType='ol'
            listItems={["What the hell is factored cognition?",
              "How to ensure the user can distinguish what element is being targeted by the cursor?",
              "When selecting elements on the canvas, when is it important to show parent elements? What about sibling elements?",
              "What does it mean to be scannable?"
            ]} />
        </div>
        <div id="p3">
          <Phase phaseTitle="Growth" />
          <Paragraph paragraphTitle="Aero Design System"
            paragraphBody="Since January 2023, my team has worked together to launch the first version of our Aero Design System. As the sole design systems IC, I am responsible for facilitating contributions from other designers, as well as hosting weekly office hours to help designers leverage the system to its fullest." />
          <ImgLeft img={Fig3} padding="" imgNum="03" imgCaption="Aero's Announcement Page" />
          <List listTitle="Questions you may want to ask me:" listType='ol'
            listItems={["What happens when the Free plan becomes a Skip button?",
              "tktk"
            ]} />
        </div>
        <div id="p4">
          <Phase phaseTitle="Culture" />
          <ImgLeft img={Fig4} padding="true" imgNum="04" imgCaption="Sharing Experience on Mobile" />
          <Paragraph paragraphTitle="Eliciting Good Feelings"
            paragraphBody="Since September 2023, I've been the sole designer supporting our mobile app experience on iOS and Android. Given the spatial constraint when designing for mobile, I employ time-based disclosure paradigms to adapt web features to smaller screens." />
          <List listTitle="Questions you may want to ask me:" listType='ol'
            listItems={["How might we leverage the simplicity of mobile patterns to make web experiences more delightful and well-timed?",
              "Why is time more important than space in mobile design? In what ways can this manifest?",
              "What are some differences to keep in mind when designing for Android over iOS?"
            ]} />
        </div>
        <More />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Index

