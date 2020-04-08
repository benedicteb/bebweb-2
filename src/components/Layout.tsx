import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Header from "./Header";

import "./Layout.css";
import colors from "../colors";
import Footer from "./Footer";

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

export default Layout;
