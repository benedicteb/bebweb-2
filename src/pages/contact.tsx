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
      <p>
        <a
          style={{ color: "white" }}
          href={"https://github.com/benedicteb"}
          target={"_blank"}
        >
          https://github.com/benedicteb
        </a>
      </p>

      <Prompt cwd={"contact"} command={"cat keybase.txt"} />
      <p>
        <a
          style={{ color: "white" }}
          href={"https://keybase.io/benedebr"}
          target={"_blank"}
        >
          https://keybase.io/benedebr
        </a>
      </p>

      <Prompt cwd={"contact"} command={"cat twitter.txt"} />
      <p>
        <a
          style={{ color: "white" }}
          href={"https://twitter.com/benedebr"}
          target={"_blank"}
        >
          https://twitter.com/benedebr
        </a>
      </p>

      <Prompt cwd={"contact"} command={"cat linkedin.txt"} />
      <p>
        <a
          style={{ color: "white" }}
          href={"https://www.linkedin.com/in/benedicte-emilie/"}
          target={"_blank"}
        >
          https://www.linkedin.com/in/benedicte-emilie/
        </a>
      </p>
    </Terminal>
  </Layout>
);

export default ContactPage;
