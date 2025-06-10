import PropTypes from "prop-types";

const langsImages = [
  { name: "C", path: "./public/assets/c.png" },
  { name: "C++", path: "./public/assets/cpp.png" },
  { name: "Python", path: "./public/assets/python.png" },
  { name: "HTML", path: "./public/assets/html.png" },
  { name: "JavaScript", path: "./public/assets/js.png" },
];

const fworksImages = [
  { name: "CSS", path: "./public/assets/css.png" },
  { name: "PyTorch", path: "./public/assets/pytorch.png" },
  { name: "TensorFlow", path: "./public/assets/tf.png" },
  { name: "NumPy", path: "./public/assets/numpy.png" },
  { name: "pandas", path: "./public/assets/pandas.png" },
  { name: "Matplotlib", path: "./public/assets/plt.png" },
  { name: "Node.js", path: "./public/assets/nodejs.png" },
  { name: "React.js", path: "./public/assets/react.png" },
];

function displayList(list, typeSkill) {
  return list.map((element, index) => {    
    const num = typeSkill === "languages" ? 25 : 60;
    const delay = `calc(${num}s / ${list.length} * (${list.length} - ${index}) * -1)`;
    return (
      <div 
        key={element.name} 
        className={`skill-div ${element.name.replace("+", "p").toLowerCase()} ${typeSkill}`}
        data-content={element.name}
        style={{animationDelay: delay}}
      >
        <img src={element.path} draggable="false" className="skill" style={{WebkitUserSelect: 'none'}}/>
      </div>
    )
  })
}

function SkillList(props) {
  const lview = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  }

  const fview = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    rowGap: "2.5rem",
  }

 if (props.type === "languages") {
    return (
      <div id="languages-list" style={lview}>
        {displayList(langsImages, props.type)}
      </div>
    )
  } else if (props.type === "fworks") {
    return (
      <div id="fworks-list" style={fview}>
        {displayList(fworksImages, props.type)}
      </div>
    )
  }
}

SkillList.propTypes = {
  type: PropTypes.string.isRequired
}

export default SkillList;