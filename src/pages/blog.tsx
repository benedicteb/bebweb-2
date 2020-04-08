import React from "react";

import Terminal from "../components/Terminal";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import SEO from "../components/SEO";
import Prompt from "../components/Prompt";

import RenderOnReady from "../components/animation/RenderOnReady";
import ReadyInstantly from "../components/animation/ReadyInstantly";
import DirectoryListing from "../components/DirectoryListing";

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />

    <Terminal>
      <Menu />

      <RenderOnReady>
        <Prompt animate={true} command={"cd blog"} />

        <DirectoryListing
          animatePrompt={true}
          cwd={"blog"}
          files={[]}
          directories={[]}
        />

        <Prompt
          animate={true}
          cwd={"blog"}
          command={"echo 'Nothing here yet!'"}
        />

        <ReadyInstantly>
          <p>Nothing here yet!</p>
        </ReadyInstantly>

        <Prompt cwd={"blog"} blinkingCursor={true} />
      </RenderOnReady>
    </Terminal>
  </Layout>
);

export default BlogPage;
