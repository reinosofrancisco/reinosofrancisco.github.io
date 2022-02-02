import "./portfolio.scss"
import { useEffect, useState } from "react";
// import TextTransition, { presets } from "react-text-transition";
import TextTransition, { presets } from "react-text-transition";
import CrossfadeImage from "react-crossfade-image";

const TEXTS = [ "Alarm Clock for", "Electronic lock for"];

const TEXTS_2 = ["STM32F103C6", "ATMEGA328P",]

const TEXTS_3 = ["RCC, Graphic Display, DHT Temperature/Humidity sensor",
  "Implements a FSM (Finite-State-Machine), LM016L Display and a 4x4 Keypad",
]

// Use images of the same Size or the CrossfadeImage bugs
const IMAGES = ["assets/STM32_V3.png", "assets/A328P_V2.png"]

export default function Portfolio() {

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      7000 // every 7 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);


  return <div className='portfolio' id="portfolio">
    <div className="left">
      <div className="wrapper">

        <h2><TextTransition noOverflow={true} text={TEXTS[index % TEXTS.length]} springConfig={presets.wobbly} /></h2>
        <h1><TextTransition noOverflow={true} text={TEXTS_2[index % TEXTS_2.length]} springConfig={presets.wobbly} /></h1>
        <h3><TextTransition noOverflow={true} text={TEXTS_3[index % TEXTS_3.length]} springConfig={presets.wobbly} /></h3>
        <p><br>{/** Empty for the sake of good looking Front-End*/}</br></p>
        
        <h3 className="protText"> + Proteus Schematics, PCB and Simulations</h3>
        <a href="#works">
          <img src="assets/arrow.png" alt="" />
        </a>

      </div>
    </div>
    <div className="right">
      <div className="imgContainer">
        <CrossfadeImage duration={300} src={IMAGES[index % IMAGES.length]} />
        <a href="#works">
          <img src="assets/arrow.png" alt="" />
        </a>
      </div>

    </div>

  </div>;
}
