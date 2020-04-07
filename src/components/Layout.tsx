import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Header from "./Header";

import "./Layout.css";

const Layout: React.FC = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  document.fonts.ready.then(() => {
    setFontsLoaded(true);
  });

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  if (!fontsLoaded) {
    return null;
  }

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
