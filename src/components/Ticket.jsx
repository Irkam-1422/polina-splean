import React, { useEffect, useRef, useState } from "react";
import img from "../assets/ticket.jpg";
import { setShowHeader } from "../actionCreators";
import { useDispatch } from "react-redux";
import "./Card.scss";

export const Ticket = () => {
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const inputRefs = useRef([]);

  useEffect(() => {
    if (values.join("").toLowerCase() === "splean") {
      setOpen(true);
      dispatch(setShowHeader(false));
    }
  }, [values]);

  return (
    <div className="ticket-cont">
      <img src={img} alt="" />
      <div
        className="blur-cont"
        style={
          open
            ? {
                backdropFilter: "blur(0px)",
                backgroundColor: "transparent",
                "-webkit-backdrop-filter": "blur(0px)",
              }
            : {}
        }
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <input
            key={i}
            type="text"
            maxLength={1}
            value={values[i]}
            ref={(el) => (inputRefs.current[i] = el)}
            style={open ? { opacity: 0 } : {}}
            disabled={open}
            onChange={(e) => {
              setValues((prev) => {
                const newValues = [...prev];
                newValues[i] = e.target.value;
                return newValues;
              });
              if (inputRefs.current[i + 1]) {
                inputRefs.current[i + 1].focus();
              }
            }}
          />
        ))}
      </div>
    </div>
  );
};
