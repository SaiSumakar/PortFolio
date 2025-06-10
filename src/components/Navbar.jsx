import "react";
import Navlink from "./Navlink";
import Clock from "./Clock";
import ScrollProgress from "./ScrollProgress";

function Navbar() {
  const navitems = ["HOME", "ABOUT", "PROJECTS", "SKILLS", "CONTACT"];
  const navto = ["#home-page", "#about-page", "#projects-page", "#skills-page", "#contact-page"];

  return (
    <>
      <Clock />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px",  }}>
        {
          navitems.map((item, index) => (
            <Navlink key={index} text={item} to={navto[index]}/>
          ))
        }
      </div>
      <ScrollProgress />
    </>
  )
}

export default Navbar;

