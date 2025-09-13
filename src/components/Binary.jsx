import React from "react";

export const Binary = ({ returnAnswer, color, bg }) => {
  const [value, setValue] = React.useState("");
  
  return (
    <div className="content">
      <div className="title" style={{ color }}>
        Binary Code
      </div>
      <div className="">Letters are encoded like this:</div>
      <div className="">
        <div className="">A = 00001</div>
        <div className="">B = 00010</div>
        <div className="">C = 00011</div>
        <div className="">D = 00100</div>
      </div>
      <span style={{ color }}>Decode:</span>
      <span className="main-text">00101 00100 00111 11001</span>
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
