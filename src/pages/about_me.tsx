import React from "react";

import Terminal from "../components/Terminal";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import SEO from "../components/SEO";
import Prompt from "../components/Prompt";
import DirectoryListing from "../components/DirectoryListing";

import RenderOnReady from "../components/animation/RenderOnReady";
import ReadyInstantly from "../components/animation/ReadyInstantly";

const AboutMePage = () => (
  <Layout>
    <SEO title="About me" />

    <Terminal>
      <Menu />

      <RenderOnReady>
        <Prompt animate={true} command={"cd about_me"} />

        <DirectoryListing
          animatePrompt={true}
          cwd={"about_me"}
          files={["benedicte.txt", "hello.rtf"]}
          directories={["more_stuff"]}
        />

        <Prompt animate={true} cwd={"about_me"} command={"cat benedicte.txt"} />

        <ReadyInstantly>
          <p>Hello! I am me.</p>
        </ReadyInstantly>

        <Prompt cwd={"about_me"} blinkingCursor={true} />
      </RenderOnReady>
    </Terminal>
  </Layout>
);

export default AboutMePage;
