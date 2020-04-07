import React from "react";
import Terminal from "../components/Terminal";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import SEO from "../components/SEO";
import Prompt from "../components/Prompt";
import FileListing from "../components/FileListing";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Terminal>
      <Menu activePage={"~"} />

      <Prompt command={"ls -lrth"} />
      <FileListing name={"home.txt"} />

      <Prompt command={"cat home.txt"} />
      <p>Welcome!</p>

      <Prompt blinkingCursor={true} />
    </Terminal>
  </Layout>
);

export default IndexPage;
