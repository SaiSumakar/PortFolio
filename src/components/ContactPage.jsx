/* eslint-disable no-unused-vars */
import { useState } from "react";
import Aurora from './Aurora';

const colors =  ["#2D2E2E", "#616161", "#A9A9A9"]
// const colors =   ["#2D2E2E", "#6D99AE", "#1F233C"]
// const colors = ["#3A29FF", "#FF94B4", "#FF3232"]

function returnLink(name, idx, socialLinks, setHovered) {
  return (
    <div className="hovered" key={idx}>
      <a  href={socialLinks[idx]} target="_blank" data-link={name} className="social-link" 
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      >
        {name}
      </a>
    </div>
  )
}

function ContactPage() {
  const socialNames = ["LinkedIn", "GitHub",];
  const hoverText = ["Sai Sumakar", "@SaiSumakar"];
  const socialLinks = [
    "https://www.linkedin.com/in/sai-sumakar/",
    "https://github.com/SaiSumakar",
  ];

  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <div id="contact-aurora">
        <Aurora
        colorStops={colors}
        blend={0.5}
        amplitude={1.0}
        speed={0.7}
        />
      </div>
      <div className="contact-title">
        <h2 className="contact-title1">Let's build</h2> 
        <h2 className="contact-title2">together!</h2>
      </div>
      <div className="linksConatiner">
        <h3 className="socials-title">Socials</h3>
        <div className="socialLinks">
          {
            socialNames.map((name, idx) => {
              return (
                returnLink(name, idx, socialLinks, isHovered, setHovered, hoverText)
              )
            })
          }
        </div>
        <h3 className="mail-title">Drop me a mail</h3>
        <div className="hovered mailhead">
          <a href="mailto:saisumakar.kothamasu@gmail.com" data-link="saisumakar.kothamasu@gmail.com"
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            saisumakar.kothamasu@gmail.com
          </a>
        </div>
      </div>
      <div className="copyright"><p>© {new Date().getFullYear()} Sai Sumakar</p></div>
    </>
  );
}

export default ContactPage;