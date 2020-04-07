import React from "react";
import Terminal from "../components/Terminal";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import SEO from "../components/SEO";
import Prompt from "../components/Prompt";
import FileListing from "../components/FileListing";
import RenderOnReady from "../components/RenderOnReady";
import ReadyInstantly from "../components/ReadyInstantly";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Terminal>
      <Menu />

      <RenderOnReady>
        <Prompt animate={true} command={"ls -lrth"} />

        <ReadyInstantly>
          <FileListing name={"home.txt"} />
        </ReadyInstantly>

        <Prompt animate={true} command={"cat home.txt"} />

        <ReadyInstantly>
          <p>Welcome!</p>
        </ReadyInstantly>

        <Prompt blinkingCursor={true} />
      </RenderOnReady>
    </Terminal>
  </Layout>
);

export default IndexPage;
