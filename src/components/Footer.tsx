import React, { FC } from "react";
import colors from "../colors";

const Footer: FC = () => (
  <footer
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: "5px",
      paddingLeft: "20px",
      paddingRight: "20px",
    }}
  >
    <div
      style={{
        textAlign: "center",
        fontSize: "0.6rem",
        lineHeight: "15px",
        color: colors.text,
        fontFamily: "Oxygen mono",
      }}
    >
      <p style={{ paddingBottom: "10px" }}>
        Sites with so many moving things is not good for accesibility I know..
        But it's so cool!
      </p>
      <p style={{ paddingBottom: "10px" }}>
        Don't like terminals? I'm working on a way to make this useable for you.
      </p>
      <p style={{ paddingBottom: "10px" }}>
        This site is made with{" "}
        <a
          style={{ color: colors.text }}
          href={"https://www.gatsbyjs.org/"}
          target={"_blank"}
        >
          Gatsby
        </a>{" "}
        - the code is on{" "}
        <a
          style={{ color: colors.text }}
          href={"https://github.com/benedicteb/bebweb-2"}
          target={"_blank"}
        >
          Github
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;
