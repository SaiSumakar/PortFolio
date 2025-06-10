import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutPage from './components/AboutPage';
import Projects from './components/Projects';
import ContactPage from './components/ContactPage';
import Aurora from './components/Aurora';
import SkillsPage from './components/SkillsPage';

const navlinks = document.querySelector('.navbar');
ReactDOM.createRoot(navlinks).render(<StrictMode><Navbar /></StrictMode>);

const heroText = document.querySelector('.hero');
ReactDOM.createRoot(heroText).render(<StrictMode><Hero /></StrictMode>);

const aboutpage = document.querySelector('#about-page');
ReactDOM.createRoot(aboutpage).render(<StrictMode><AboutPage /></StrictMode>);

const projects = document.querySelector('#projects');
ReactDOM.createRoot(projects).render(<StrictMode><Projects /></StrictMode>);

const skillsPage = document.getElementById("skills-page");
ReactDOM.createRoot(skillsPage).render(<StrictMode><SkillsPage /></StrictMode>);

const contactPage = document.querySelector("#contact-page");
ReactDOM.createRoot(contactPage).render(<StrictMode><ContactPage /></StrictMode>);

const colors =  ["#2D2E2E", "#616161", "#A9A9A9"]
// const colors =   ["#2D2E2E", "#6D99AE", "#1F233C"]
// const colors = ["#3A29FF", "#FF94B4", "#FF3232"]

const landing = document.querySelector('.landing-aurora');
const landingBody = ReactDOM.createRoot(landing);
landingBody.render(
  <StrictMode>
    <Aurora
      colorStops={colors}
      blend={0.5}
      amplitude={1.0}
      speed={0.7}
    />
  </StrictMode>
)

function changeNavBarColor(){
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('.section');

  window.addEventListener('scroll', () => {
    let currentSection = null;
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 30 && rect.bottom > -25){
        currentSection = section;
      }
    });
    
    if (currentSection && currentSection.classList.contains('white-background')) {
      navbar.style.color = '#11120e'; 
    } else if (currentSection && currentSection.classList.contains('black-background')) {
      navbar.style.color = '#dbd0d5';
    }
  });
}
changeNavBarColor();