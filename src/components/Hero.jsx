import { useEffect } from "react";
import Letter from "./Letter";
import { ReactLenis } from "lenis/dist/lenis-react"

function Hero(){
  const name = "Sumakar".split('');

  useEffect(() => {
    document.querySelector('.hero-title').classList.add('animateLtr');
  }, [])


  return (
    <ReactLenis root options={{lerp: 0.05}} > 
      <div className="hero-text">
        <div className="hero-title">Hello! I&apos;m</div>
        <div style={{display: 'flex', justifyContent: 'center', width: 'fit-content'}}>
          {name.map((l, idx) => {
            return <Letter key={idx} ltr={l}/>
          })}
        </div>
      </div>
      <div className="hero-image">
        <img src="./assets/my.jpg" alt="Author Image"/>
      </div>
    </ReactLenis>
  )
}

export default Hero;