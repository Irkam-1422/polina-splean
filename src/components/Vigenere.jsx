import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Alphabet } from "./Alphabet";
import {
  faInfo,
  faA,
  faXmark,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export const Vigenere = ({ returnAnswer, color, bg }) => {
  const [showInfo, setShowInfo] = React.useState(false);
  const [showAlphabet, setShowAlphabet] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="content">
      <div className="title" style={{ color }}>
        Vigenère Cipher
        <FontAwesomeIcon
          icon={faInfo}
          style={{ marginLeft: ".25rem", background: color, color: bg }}
          onClick={() => setShowInfo(true)}
        />
        <FontAwesomeIcon
          icon={faA}
          style={{ background: color, color: bg }}
          onClick={() => setShowAlphabet(true)}
        />
      </div>
      <span style={{ color }}>Encoded message:</span>
      <span className="main-text">Polina, you have some problems!</span>
      <span style={{ color }}>Reult:</span>
      <span className="main-text">
        33 27 11 18 17 18 , 24 24 24 25 13 21 14 36 32 25 4 19 35 32 14 11 14 16
        36 !'
      </span>
      <span style={{ color }}>Goal:</span>
      <span className="main-text">Find the key word</span>
      <span style={{ color }}>Key word:</span>
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
      <div
        className="info-cont"
        style={{ display: !showInfo ? "none" : "flex" }}
      >
        <div className="inner-info" style={{ background: bg }}>
          <div
            className="close-btn"
            onClick={() => setShowInfo(false)}
            style={{ color }}
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div className="title" style={{ color }}>
            Vigenère Cipher
          </div>
          <div className="">
            Write the keyword under the coded text, repeat until it matches the
            length. Each letter of the keyword tells you how many steps to shift
            back (A=0, B=1, C=2…).
          </div>
          <div
            style={{
              color,
              marginBottom: "1rem",
              marginTop: "1rem",
            }}
          >
            Example:
          </div>
          <div
            style={{
              textAlign: "initial",
              width: "300px",
            }}
          >
            <span style={{ color }}>Input:</span> HELLO{" "}
            <FontAwesomeIcon icon={faArrowRight} /> 7, 4, 11, 11, 14
          </div>
          <div
            style={{
              textAlign: "initial",
              width: "300px",
            }}
          >
            <span style={{ color }}>Keyword:</span> KEY
          </div>
          <div
            style={{
              textAlign: "initial",
              width: "300px",
            }}
          >
            <span style={{ color }}>Keystring:</span> KEYKE{" "}
            <FontAwesomeIcon icon={faArrowRight} /> 10, 4, 24, 10, 4
          </div>
          <div
            style={{
              textAlign: "initial",
              width: "300px",
            }}
          >
            <span style={{ color }}>Coded:</span> 7+10, 4+4, 11+24, 11+10, 14+4{" "}
            <FontAwesomeIcon icon={faArrowRight} /> 17, 8, 35, 21, 18
          </div>
        </div>
      </div>
      <Alphabet
        display={!showAlphabet ? "none" : "flex"}
        returnClose={() => setShowAlphabet(false)}
        color={color}
        bg={bg}
      />
    </div>
  );
};
