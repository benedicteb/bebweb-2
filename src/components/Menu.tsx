import React, { FC } from "react";

import Prompt from "./Prompt";
import DirectoryLong from "./DirectoryLong";
import { BREAK_POINTS } from "../mediaQueries";
import Media from "react-media";
import DirectoryShort from "./DirectoryShort";

const Menu: FC = () => (
  <>
    <Media queries={BREAK_POINTS}>
      {matches => (
        <>
          <Prompt command={matches.small ? "ls ~/" : "ls -lrth ~/"} />
          {matches.large && <p>total 24</p>}
          <ul>
            {["home", "about_me", "blog", "contact"].map(page =>
              matches.small ? (
                <DirectoryShort
                  key={page}
                  name={page}
                  linkTo={page === "home" ? "/" : `/${page}`}
                />
              ) : (
                <DirectoryLong
                  key={page}
                  name={page}
                  linkTo={page === "home" ? "/" : `/${page}`}
                />
              )
            )}
          </ul>
        </>
      )}
    </Media>
  </>
);

export default Menu;
