import React from "react";
import Terminal from "../components/Terminal";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import SEO from "../components/SEO";

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" />

    <Terminal>
      <Menu activePage={"blog"} />
    </Terminal>
  </Layout>
);

export default BlogPage;
