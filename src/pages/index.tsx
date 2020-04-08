import React from "react";

import Terminal from "../components/Terminal";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import SEO from "../components/SEO";
import Prompt from "../components/Prompt";
import FileLong from "../components/FileLong";

import RenderOnReady from "../components/animation/RenderOnReady";
import ReadyInstantly from "../components/animation/ReadyInstantly";
import { BREAK_POINTS } from "../mediaQueries";
import Media from "react-media";
import FileShort from "../components/FileShort";
import DirectoryListing from "../components/DirectoryListing";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Terminal>
      <Menu />

      <RenderOnReady>
        <DirectoryListing
          animatePrompt={true}
          files={["home.txt"]}
          directories={[]}
        />

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
