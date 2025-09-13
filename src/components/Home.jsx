import React, { useState } from "react";
import { Card } from "./Card";
import { Vigenere } from "./Vigenere";
import { PeriodicTable } from "./PeriodicTable";
import { Fillword } from "./Fillword";
import { Loodsen } from "./Loodsen";
import { Beer } from "./Beer";
import { Binary } from "./Binary";
import { Header } from "./Header";
import { Ticket } from "./Ticket";

const colors = [
  "#ef676c",
  "#a684ff",
  "#59c03a",
  "#ee77cd",
  "#4fb6ce",
  "#ffde59",
  // "#FF9800",
];

export const Home = () => {
  const [open, setOpen] = useState([false, false, false, false, false, false]);

  const toggleOpen = (index) => {
    setOpen((prev) => {
      const newOpen = [...prev];
      newOpen[index] = true;
      return newOpen;
    });
  };

  const handleClose = () => {
    let count = 0;
    const closeFn = (i, timerId) => {
      console.log("Closing card", count);
      setOpen((prev) => {
        const newOpen = [...prev];
        newOpen[count] = false;
        return newOpen;
      });
      count++;

      if (count >= open.length) {
        console.log(count, "is greater than", open.length);

        clearTimeout(timerId);
      } else {
        timerId = setTimeout(closeFn, 1000);
      }
    };
    let timerId = setTimeout(() => {
      closeFn(count, timerId);
    }, 0);
  };

  return (
    <div>
      <Header />
      <Ticket />
      {[
        {
          component: Loodsen,
          answer: "nests",
        },
        {
          component: Beer,
          answer: "apple",
        },
        {
          component: Binary,
          answer: "edgy",
        },
        {
          component: PeriodicTable,
          answer: "licking",
        },
        {
          component: Fillword,
          answer: "prefer",
        },
        {
          component: Vigenere,
          answer: "snakes",
        },
      ].map((a, i) => (
        <Card
          key={i}
          i={i + 1}
          background={"#231e20"}
          color={colors[i]}
          type={i % 2 === 0 ? "vertical" : "horizontal"}
          setOpen={() => toggleOpen(i)}
          open={open[i]}
          element={a}
        />
      ))}
      
      <div
          id='cover-div'
          style={{
            transition: "all 0.5s ease-in-out",
            position: "absolute",
            zIndex: "9999999",
            pointerEvents: "none",
            width: "100%",
            height: "100%",
            top: "0",
            left: "0",
          }}
        />
    </div>
  );
};
