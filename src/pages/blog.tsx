import React from "react";
import Terminal from "../components/Terminal";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import SEO from "../components/SEO";
import Prompt from "../components/Prompt";

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />

    <Terminal>
      <Menu activePage={"blog"} />

      <Prompt cwd={"blog"} blinkingCursor={true} />
    </Terminal>
  </Layout>
);

export default BlogPage;
