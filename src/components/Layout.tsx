import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Header from "./Header";

import "./Layout.css";

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
        <footer />
      </div>
    </>
  );
};

export default Layout;
