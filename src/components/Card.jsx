import React, { useEffect, useRef, useState } from "react";
import "./Card.scss";
import { adjustColor } from "../utils/colors";
import { useDispatch } from "react-redux";
import { setWords } from "../actionCreators";
import bg1 from "../assets/bg1.png";
import bg2 from "../assets/bg2.png";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.png";
import bg5 from "../assets/bg5.png";
import bg6 from "../assets/bg6.png";

const bgs = [bg1, bg2, bg3, bg4, bg5, bg6];

export const Card = ({
  i = 1,
  type = "vertical",
  background = "red",
  setOpen,
  open,
  element,
  color,
}) => {
  // const [color, setColor] = useState("white");
  const innerRef = useRef(null);
  const contentRef = useRef(null);
  const coverRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!coverRef.current) return;
    coverRef.current.style.zIndex = "99999";
    coverRef.current.style.transition = "all 0.3s ease-in-out";
    coverRef.current.style.background = "transparent";
    setTimeout(() => {
      coverRef.current.style.zIndex = "-1";
    }, 300);
  }, []);

  const handleDisappear = () => {
    document.getElementById('cover-div').style.background = "#231e20";
    setTimeout(() => {
      contentRef.current.style.display = "none";
      document.getElementById('cover-div').style.background = "transparent";
    },500)
  };

  const handleAnswerCheck = (answer) => {
    if (answer.trim().toLowerCase() === element.answer) {
      console.log("Correct answer!");
      dispatch(setWords(answer));
      handleDisappear();
    } else {
      console.log("Incorrect answer, try again.", element.answer, answer);
    }
  };

  return (
    <>
      <div
        ref={contentRef}
        className={`cont ${type}-cont`}
        style={{
          // position: 'relative',
          zIndex: !open ? "" : -1,
        }}
      >
        <div
          className="inner-div"
          style={{
            background: `url(${bgs[i - 1]})`,
            transform: !open
              ? "none"
              : type === "vertical"
              ? "translateY(-100%)"
              : "translateX(-100%)",
          }}
        ></div>
        <div
          className="inner-div second"
          style={{
            background: `url(${bgs[i - 1]})`,
            transform: !open
              ? "none"
              : type === "vertical"
              ? "translateY(100%)"
              : "translateX(100%)",
          }}
        ></div>
        <div className="inner-content" ref={innerRef}>
          {element.component &&
            React.createElement(element.component, {
              returnAnswer: handleAnswerCheck,
              color: color,
              bg: background,
            })}
        </div>
      </div>
    </>
  );
};
