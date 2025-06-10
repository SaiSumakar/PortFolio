import PropTypes from "prop-types";

const skills = {
  languages: [
    { name: "C", path: "/portfolio/assets/c.png" },
    { name: "C++", path: "/portfolio/assets/cpp.png" },
    { name: "Python", path: "/portfolio/assets/python.png" },
    { name: "HTML", path: "/portfolio/assets/html.png" },
    { name: "JavaScript", path: "/portfolio/assets/js.png" },
  ],
  fworks: [
    { name: "CSS", path: "/portfolio/assets/css.png" },
    { name: "PyTorch", path: "/portfolio/assets/pytorch.png" },
    { name: "TensorFlow", path: "/portfolio/assets/tf.png" },
    { name: "NumPy", path: "/portfolio/assets/numpy.png" },
    { name: "pandas", path: "/portfolio/assets/pandas.png" },
    { name: "Matplotlib", path: "/portfolio/assets/plt.png" },
    { name: "Node.js", path: "/portfolio/assets/nodejs.png" },
    { name: "React.js", path: "/portfolio/assets/react.png" },
  ]
};

const displayList = (list, type) => {
  const baseDelay = type === "languages" ? 25 : 60;

  return list.map((el, i) => {
    const delay = `calc(${baseDelay}s / ${list.length} * (${list.length} - ${i}) * -1)`;
    return (
      <div
        key={el.name}
        className={`skill-div ${el.name.replace("+", "p").toLowerCase()} ${type}`}
        data-content={el.name}
        style={{ animationDelay: delay }}
      >
        <img
          src={el.path}
          alt={el.name}
          draggable="false"
          className="skill"
          style={{ WebkitUserSelect: "none" }}
        />
      </div>
    );
  });
};

function SkillList({ type }) {
  const viewStyles = {
    languages: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },
    fworks: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      rowGap: "2.5rem",
    },
  };

  return (
    <div id={`${type}-list`} style={viewStyles[type]}>
      {displayList(skills[type], type)}
    </div>
  );
}

SkillList.propTypes = {
  type: PropTypes.oneOf(["languages", "fworks"]).isRequired,
};

export default SkillList;
