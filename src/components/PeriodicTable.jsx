import React from "react";
import img from "../assets/mendeleev.jpg";

export const PeriodicTable = ({ returnAnswer, color, bg }) => {
  const [value, setValue] = React.useState("");
  const hintRef = React.useRef(null);
  return (
    <div className="content">
      <span
        style={{
          color,
          cursor: "pointer",
          transition: "all .3s",
          marginBottom: "1.5rem",
        }}
        onClick={(e) => {
          e.target.style.opacity = 0;
          if (hintRef.current) hintRef.current.style.opacity = 1;
        }}
      >
        Need a hint? Click here!
      </span>
      <span
        style={{
          color,
          opacity: 0,
          transition: "all .3s",
          position: "absolute",
          top: "4rem",
        }}
        ref={hintRef}
      >
        Hint: Think about your favourite school subject
      </span>
      <img src={img} style={{ width: "200px", marginBottom: "1rem" }} />
      <span style={{ color }}>Decode:</span>
      <span className="main-text">3, 6, 19, 53, 7, 64 - d</span>
      <span style={{ color }}>Answer:</span>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ borderColor: color, color: color }}
        onFocus={(e) => (e.target.style.outline = `2px solid ${color}`)}
        onBlur={(e) => (e.target.style.outline = `none`)}
      />
      <button
        onClick={() => returnAnswer(value)}
        style={{ background: color, color: bg }}
      >
        Check!
      </button>
    </div>
  );
};
