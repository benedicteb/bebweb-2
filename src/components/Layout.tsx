import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Header from "./Header";

import "./Layout.css";
import colors from "../colors";

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

const Footer: FC = () => (
  <footer
    style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      marginTop: "5px",
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
      <p>
        Sites with so many moving things is not good for accesibility I know..
        But it's so cool!
      </p>
      <p>
        Don't like terminals? I'm working on a way to make this useable for you.
      </p>
      <p>
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

export default Layout;
