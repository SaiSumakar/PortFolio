import { useState, useEffect } from "react";

function Clock() {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const date = currentTime.getDate().toString().padStart(2, '0');
  const month = (currentTime.getMonth() + 1).toString().padStart(2, '0');

  const formattedTime = (
    <>
      {date}/{month} &nbsp; {hours}:{minutes}
    </>
  );
  const clockStyle = {
    fontSize: '1rem',
    fontFamily: "Chewie, sans-serif",
    textAlign: 'center',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 'fit-content',
    padding: '0 0 0 5px',
    letterSpacing: '0.05rem',
  }

  return (
    <div style={clockStyle}>
      <span>{formattedTime}</span>
    </div>
  )

};

export default Clock;