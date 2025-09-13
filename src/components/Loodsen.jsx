import React from "react";

export const Loodsen = ({ returnAnswer, color, bg }) => {
  const [value, setValue] = React.useState("");

  return (
    <div className="content">
      <div className="title" style={{ color }}>
        Loodsen Code
      </div>
      <div className="">
        Who are you without your friends?
        Go to the Loodsen chat, and find a loods with the phone number ending on
        the following numbers:
      </div>
      <span style={{ color }}>Decode:</span>
      <span className="main-text">837 980 198 450 198 </span>
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
