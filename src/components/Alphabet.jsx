import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Alphabet = ({ display, returnClose, color, bg }) => {
  return (
    <div className="info-cont" style={{ display }}>
      <div className="inner-info" style={{ background: bg }}>
        <div className="close-btn" onClick={returnClose}>
          <FontAwesomeIcon icon={faXmark} style={{ color }} />
        </div>
        <div className="title" style={{ color }}>
          Alphabet
        </div>
        <div className="alphabet">
          {[
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "u",
            "v",
            "w",
            "x",
            "y",
            "z",
          ].map((letter, i) => (
            <div className="m-2" key={i}>
              {letter.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
