import React, { ReactNode, FC } from "react";
import Prompt from "./Prompt";

const Terminal: FC<{ children: ReactNode }> = ({ children }) => (
  <div
    style={{
      backgroundColor: "black",
      margin: "20px",
      padding: "5px",
      color: "white",
      fontFamily: "Oxygen mono",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "#191a6d",
      boxShadow: "rgba(0, 0, 0, 0.61) 4px 2px 10px 0px",
    }}
  >
    <p>Last login: Tue Apr 7 07:37:51 on ttys002</p>
    {children}
  </div>
);

export default Terminal;
