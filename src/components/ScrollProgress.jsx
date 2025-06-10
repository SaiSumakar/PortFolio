import { useState, useEffect } from "react";

const scrollStyles = {
  fontFamily: "Chewie, sans-serif",
  fontSize: "1.1rem",
  width: "42px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setScrollPercentage(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div style={scrollStyles}>
      {Math.round(scrollPercentage)}%
    </div>
  );
}

export default ScrollProgress;
