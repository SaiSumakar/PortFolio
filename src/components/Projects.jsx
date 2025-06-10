import projectsArray from "./projectsInfo.js"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import Divider from '@mui/material/Divider';

const gridLayout ={
  "display": "grid",
  "gridTemplateColumns": "1fr 1fr",
  "rowGap": "70px",
  "columnGap": "60px",
}

const sourceBtnStyles = {
  textDecoration: "none",
  fontSize: "1rem",
  margin: "15px 0px 10px 0px",
  fontFamily: "Faculty Glyphic, sans-serif",
  width: "fit-content",
  color: '#dbd0d5',
  textTransform: "none",
  "& .arrow-icon": {
    opacity: 0,
    transform: "translateX(-10px) scale(0.5)",
    transition: "opacity 0.1s, transform 0.2s",
  },
  "&:hover .arrow-icon":{
    opacity: 1,
    transform: "translateX(0px) scale(0.95)",
  },
  '&:hover': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  }
}

function Projects() {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = (x / rect.width) * 100;
    const py = (y / rect.height) * 100;
    card.style.setProperty("--x", `${px}%`);
    card.style.setProperty("--y", `${py}%`);
    card.style.setProperty("--spotlight-alpha", "1");
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--spotlight-alpha", "0");
  };

  return (
    <>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between",
}}>
        <h2 className="projects-title">Projects</h2>
        <Button
          component="a"
          href="https://github.com/SaiSumakar?tab=repositories"
          target="_blank"
          sx={{
            ...sourceBtnStyles,
            alignSelf:"flex-end",
          }}
          endIcon={<ArrowOutwardIcon className="arrow-icon" sx={{ml:'-4px'}}/>}>
        View All
        </Button>
      </div>
      <div style={gridLayout}>
        {
          projectsArray.map((project, index) => {
            return (
              <div key={index} className="project" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <h2 className="project-title">{project.title}</h2>
                <Divider sx={{ backgroundColor: '#FCF6EA', opacity: 0.7, height: '1px'}} />
                <ul className="project-description">
                  {
                    project.description.map((point, idx) => {
                      return <li key={idx} style={{padding: "10px"}}
                      >{point}</li>
                    })
                  }
                </ul>
                <Button component="a" href={project.link} target="_blank" 
                  endIcon={<ArrowOutwardIcon className="arrow-icon" sx={{ml:'-4px'}}/>}
                  sx={sourceBtnStyles}>
                  <GitHubIcon sx={{padding: '0 10px 0 0', fontSize: '1.5rem', color: '#D6DC82'}}/>
                  Source Code
                </Button>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Projects;