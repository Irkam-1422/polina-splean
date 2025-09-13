import React from "react";

export const Beer = ({ returnAnswer, color, bg }) => {
  const [value, setValue] = React.useState("");

  return (
    <div className="content">
      <div className="title" style={{ color }}>
        Beer Code
      </div>
      <div className="">
        It's time for a drink!. Look at the back of the beer can, 
        you need the following letters (ignore the spaces, but not the comas):
      </div>
      <span style={{ color }}>Decode (line number, position in line):</span>
      <span className="main-text">1,7 2,5 3,7 4,5 5,2</span>
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
