import React from "react";
import { useSelector } from "react-redux";
import "./Header.scss";

export const Header = () => {
  const words = useSelector((state) => state.words);
  const showHeader = useSelector((state) => state.showHeader);

  return (
    <div className="header-cont" style={!showHeader ? { opacity: 0 } : {}}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div className="" key={i}>
          {words[i] || ""}
        </div>
      ))}
    </div>
  );
};
