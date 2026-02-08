import React from "react"
import SEO from '../../components/seo';
import Hero from "./images/hero.png";

import Fig1 from "./images/Fig1.gif";
import Fig2 from "./images/Fig2.png";
import Fig3 from "./images/Fig3.png";
import Fig4 from "./images/Fig4.png";
import Fig5 from "./images/Fig5.png";

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
          abstractTools="Prototyping, Multi-arm Testing"
          abstractTime="2024 – Present"
          abstractBody="Elicit is an AI tool for scientific research with deep roots in an AI Safety research lab called Ought. As 1 of the 3 people legally allowed to call this a design team, I cover a wide range, from running experiments with my analytics buddy, to thinking really hard about auditability of AI systems."
        />

        <Tracker phaseList={['ITERABILITY', 'AUDITABILITY', 'GROWTH', 'CULTURE']}
          trackerHead={Constants.elicit.heroTitle} />
        <div id="p1">
          <Phase phaseTitle="Input Iterability" />
          <ImgLeft img={Fig1} padding="yes" imgNum="01" imgCaption="Favorite project from this era — the query suggester." />
          <Paragraph paragraphTitle="Facilitating Improvement Loops"
            paragraphBody="A big problem space in AI is the causal relationship between input and output quality. As of 2024, you often saw iteration on outputs, but rarely LLM-powered iteration on prompts. First of its kind at the time, my query suggester experience was [[the most impactful>https://x.com/Stammy/status/1892615079302209727 ]] result of this much larger body of work." />
          <List listTitle="Questions you may want to ask me:" listType='ol'
            listItems={[
              "Do people prefer to iterate from outputs or perfect prompts?",
              "How to disambuguate user queries for better precision?",
              "How do we craft an incisive prompt for an incisive output?",
              "How does the calibration of uncertainty in prompts result in better outputs?"
            ]} />
        </div>
        <div id="p2">
          <Phase phaseTitle="Output Auditability" />
          <ImgLeft img={Fig2} padding="" imgNum="02" imgCaption="The Context Menu of Sense-Making" />
          <Paragraph paragraphTitle="Factored Cognition, Sense-making"
            paragraphBody="Input optimization can only get us so far, and the vast majority of iteration occurs after running the prompt. To iterate from results, the output should be highly auditable. This multi-project saga explored ways to structure non-deterministic data to make our flagship features easy to browse and iterate from." />
          <List listTitle="Questions you may want to ask me:" listType='ol'
            listItems={["What the hell is factored cognition?",
              "What the hell is sense-making?",
              "How might we visually structure complex information for better sense-making and auditability?",
              "How does one design for non-deterministic outputs?",
              "How does narrative data enrichment differ from tabular data enrichment?",
              "What is the Why Does It Suck framework?",
              "How might we maintain user engagement while rewarding iteration?"
            ]} />
        </div>
        <div id="p3">
          <Phase phaseTitle="Growth" />
          <Paragraph paragraphTitle="Web Extension, Onboarding, Free Trials"
            paragraphBody="Growth comes in many forms at Elicit, from running multi-arm experiments on our pricing and packaging to making churn-prone workflows more delightful to use." />
          <ImgLeft img={Fig5} padding="yes" imgNum="03" imgCaption="Got full-texts?" />
          <List listTitle="Questions you may want to ask me:" listType='ol'
            listItems={["What happens when you turn a pricing plan card into a button? What if it's a Skip button?",
              "How did a bespoke PDF-fetching web extension boost our retention metrics?",
              "How do you build a free trial experience from scratch? What variables had an outsized impact?",
              "What are the 3 difficulty levels of academic plan verification flows? And can I speedrun the hardest one?",
            ]} />
        </div>
        <div id="p4">
          <Phase phaseTitle="Culture" />
          <Paragraph paragraphTitle="Eliciting Good Feelings"
            paragraphBody="Elicit's logo is a stack of books designed by the wonderful [[Maggie Appleton>https://maggieappleton.com/]] and since I took over, they've been horribly bastardized by my grubby fingers. It's been turned into an adobe house for the team retreat to Santa Fe, adorned with holographic stripes for the trip to Meow Wolf, and even turned into a pumpkin when the night was over." />
          <ImgLeft img={Fig3} padding="" imgNum="" imgCaption="" />
          <List listTitle="Questions you may want to ask me:" listType='ol'
            listItems={["What's inside the Elicit books anyway?",
              "Why is there an otter on some of the Elician laptops?",
              "Tell me about the time you hand-drew all 25 employees as California Redwood trees.",
              "Should I be afraid of the Elizard?"
            ]} />
          <ImgRight img={Fig4} padding="true" imgNum="04" imgCaption="Yes, you should be afraid of the Elizard." />
        </div>
        <More />
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Index

