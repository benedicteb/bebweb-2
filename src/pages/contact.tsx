import React from "react";
import Terminal from "../components/Terminal";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import SEO from "../components/SEO";
import DirectoryListing from "../components/DirectoryListing";
import Prompt from "../components/Prompt";
import ReadyInstantly from "../components/animation/ReadyInstantly";
import RenderOnReady from "../components/animation/RenderOnReady";

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />

    <Terminal>
      <Menu />

      <RenderOnReady>
        <Prompt animate={true} command={"cd contact"} />

        <DirectoryListing
          animatePrompt={true}
          cwd={"contact"}
          files={["github.txt", "keybase.txt", "twitter.txt", "linkedin.txt"]}
          directories={["info"]}
        />

        <Prompt animate={true} cwd={"contact"} command={"cat info/misc.txt"} />

        <ReadyInstantly>
          <p>You can reach me in these places!</p>
        </ReadyInstantly>

        <Prompt animate={true} cwd={"contact"} command={"cat github.txt"} />

        <ReadyInstantly>
          <p>
            <a
              style={{ color: "white" }}
              href={"https://github.com/benedicteb"}
              target={"_blank"}
            >
              https://github.com/benedicteb
            </a>
          </p>
        </ReadyInstantly>

        <Prompt animate={true} cwd={"contact"} command={"cat keybase.txt"} />

        <ReadyInstantly>
          <p>
            <a
              style={{ color: "white" }}
              href={"https://keybase.io/benedebr"}
              target={"_blank"}
            >
              https://keybase.io/benedebr
            </a>
          </p>
        </ReadyInstantly>

        <Prompt animate={true} cwd={"contact"} command={"cat twitter.txt"} />

        <ReadyInstantly>
          <p>
            <a
              style={{ color: "white" }}
              href={"https://twitter.com/benedebr"}
              target={"_blank"}
            >
              https://twitter.com/benedebr
            </a>
          </p>
        </ReadyInstantly>

        <Prompt animate={true} cwd={"contact"} command={"cat linkedin.txt"} />

        <ReadyInstantly>
          <p>
            <a
              style={{ color: "white" }}
              href={"https://www.linkedin.com/in/benedicte-emilie/"}
              target={"_blank"}
            >
              https://www.linkedin.com/in/benedicte-emilie/
            </a>
          </p>
        </ReadyInstantly>

        <Prompt animate={true} cwd={"contact"} blinkingCursor={true} />
      </RenderOnReady>
    </Terminal>
  </Layout>
);

export default ContactPage;
