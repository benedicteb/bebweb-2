import React from "react";
import Terminal from "../components/Terminal";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import SEO from "../components/SEO";
import DirectoryListing from "../components/DirectoryListing";
import Prompt from "../components/Prompt";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <Terminal>
      <Menu activePage={"contact"} />

      <DirectoryListing
        cwd={"contact"}
        files={["github.txt", "keybase.txt", "twitter.txt", "linkedin.txt"]}
        directories={["info"]}
      />

      <Prompt cwd={"contact"} command={"cat info/misc.txt"} />
      <p>You can reach me in these places!</p>

      <Prompt cwd={"contact"} command={"cat github.txt"} />
      <p>https://github.com/benedicteb</p>

      <Prompt cwd={"contact"} command={"cat keybase.txt"} />
      <p>https://keybase.io/benedebr</p>

      <Prompt cwd={"contact"} command={"cat twitter.txt"} />
      <p>https://twitter.com/benedebr</p>

      <Prompt cwd={"contact"} command={"cat linkedin.txt"} />
      <p>https://www.linkedin.com/in/benedicte-emilie/</p>
    </Terminal>
  </Layout>
);

export default ContactPage;
