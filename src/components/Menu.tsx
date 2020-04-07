import React, { FC } from "react";
import Prompt from "./Prompt";
import DirectoryLink from "./DirectoryLink";

const Menu: FC<{ activePage: string }> = ({ activePage }) => (
  <>
    <Prompt cwd={activePage} command={"ls -lrth ~/"} />
    <p>total 24</p>
    <ul>
      {["home", "about_me", "blog", "contact"].map(page => (
        <DirectoryLink
          key={page}
          name={page}
          target={page === "home" ? "/" : `/${page}`}
        />
      ))}
    </ul>
  </>
);

export default Menu;
