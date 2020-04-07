import React from "react";
import Terminal from "../components/Terminal";
import Layout from "../components/Layout";
import Menu from "../components/Menu";
import AboutMe from "../components/AboutMe";
import SEO from "../components/SEO";
import Prompt from "../components/Prompt";
import DirectoryListing from "../components/DirectoryListing";

const AboutMePage = () => (
  <Layout>
    <SEO title="About me" />

    <Terminal>
      <Menu activePage={"about_me"} />

      <DirectoryListing
        cwd={"about_me"}
        files={["benedicte.txt", "hello.rtf"]}
        directories={["more_stuff"]}
      />

      <Prompt cwd={"about_me"} command={"cat benedicte.txt"} />
      <p>Hello! I am me.</p>

      <Prompt cwd={"about_me"} blinkingCursor={true} />
    </Terminal>
  </Layout>
);

export default AboutMePage;
