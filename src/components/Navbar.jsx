import "react";
import Navlink from "./Navlink";
import Clock from "./Clock";
import ScrollProgress from "./ScrollProgress";

function Navbar() {
  const navitems = ["HOME", "ABOUT", "PROJECTS", "SKILLS", "CONTACT", "RESUME"];
  const navto = ["#home-page", "#about-page", "#projects-page", "#skills-page", "#contact-page", "https://drive.google.com/file/d/1_C5kfYbufB-Zj3c1dU2Vf8Isyl1fnA9P/view?usp=sharing"];

  return (
    <>
      <Clock />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px",  }}>
        {
          navitems.map((item, index) => (
            <Navlink key={index} text={item} to={navto[index]} name={item}/>
          ))
        }
      </div>
      <ScrollProgress />
    </>
  )
}

export default Navbar;

