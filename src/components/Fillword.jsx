import React, { useRef } from "react";

const arr = [
  0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0,
];

const mapping = {
  7: 1,
  15: 2,
  36: 3,
  50: 4,
  65: 5,
  82: 6,
};

const mapping2 = {
  8: 0,
  23: 1,
  38: 2,
  53: 3,
  68: 4,
  83: 5,
};

export const Fillword = ({ returnAnswer, color, bg }) => {
  const [values, setValues] = React.useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  return (
    <div className="content">
      <div className="title" style={{ color }}>
        Fillword
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".25rem",
          marginBottom: "2rem",
          justifyContent: "center",
          alignItems: "start",
          padding: "0 1rem",
        }}
      >
        <div style={{textAlign: "left", width: "100%"}}>
          1. A writer whose name was on a liquor you bought with Denise
        </div>
        <div className="">2. The subject your favourite school teacher taught</div>
        <div className="">3. The name of John Lennon’s band</div>
        <div className="">4. Short for elevator</div>
        <div className="">5. The best place to hangout in Rotterdam</div>
        <div className="">
          6. The subject your favourite school teacher taught
        </div>
      </div>
      <div className="grid-container">
        {arr.map((n, i) => (
          <div key={i}>
            {!!n ? (
              <input
                ref={(el) => (inputRefs.current[i] = el)}
                style={
                  [8, 23, 38, 53, 68, 83].includes(i)
                    ? { background: color }
                    : {}
                }
                type="text"
                onChange={(e) => {
                  if (e.target.value.length) {
                    if ([8, 23, 38, 53, 68, 83].includes(i)) {
                      const newValues = [...values];
                      newValues[mapping2[i]] = e.target.value;
                      console.log(i, mapping2[i], newValues);
                      setValues(newValues);
                    }
                    if (arr[i + 1] === 1 && inputRefs.current[i + 1]) {
                      inputRefs.current[i + 1].focus();
                    }
                  }
                }}
              />
            ) : n === 0 && arr[i + 1] === 1 ? (
              `${mapping[i]}.`
            ) : null}
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          returnAnswer(values.join("").toLowerCase())
        }}
        style={{ background: color, color: bg }}
      >
        Check!
      </button>
    </div>
  );
};
