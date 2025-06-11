import PropTypes from "prop-types";
import skills from "./image_paths"

// const skills = {
//   languages: [
//     { name: "C", path: "/assets/c.png" },
//     { name: "C++", path: "/assets/cpp.png" },
//     { name: "Python", path: "/assets/python.png" },
//     { name: "HTML", path: "/assets/html.png" },
//     { name: "JavaScript", path: "/assets/js.png" },
//   ],
//   fworks: [
//     { name: "CSS", path: "/assets/css.png" },
//     { name: "PyTorch", path: "/assets/pytorch.png" },
//     { name: "TensorFlow", path: "/assets/tf.png" },
//     { name: "NumPy", path: "/assets/numpy.png" },
//     { name: "pandas", path: "/assets/pandas.png" },
//     { name: "Matplotlib", path: "/assets/plt.png" },
//     { name: "Node.js", path: "/assets/nodejs.png" },
//     { name: "React.js", path: "/assets/react.png" },
//   ]
// };

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
