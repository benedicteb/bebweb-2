import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Terminal from "../components/Terminal";
import Prompt from "../components/Prompt";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <Terminal>
      <p>Not found</p>

      <Prompt blinkingCursor={true} />
    </Terminal>
  </Layout>
);

export default NotFoundPage;
