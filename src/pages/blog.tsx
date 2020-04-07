import React from "react";

import Terminal from "../components/Terminal";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import SEO from "../components/SEO";
import Prompt from "../components/Prompt";

import RenderOnReady from "../components/animation/RenderOnReady";
import ReadyInstantly from "../components/animation/ReadyInstantly";

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />

    <Terminal>
      <Menu />

      <RenderOnReady>
        <Prompt animate={true} command={"cd blog"} />

        <Prompt animate={true} cwd={"blog"} command={"ls -lrth"} />

        <Prompt
          animate={true}
          cwd={"blog"}
          command={"echo 'Nothing here yet!"}
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
