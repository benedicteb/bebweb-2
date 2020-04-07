import Prompt from "./Prompt";
import React, { FC } from "react";
import Directory from "./Directory";
import FileListing from "./FileListing";
import RenderOnReady from "./RenderOnReady";

const DirectoryListing: FC<{
  cwd: string;
  files: string[];
  directories: string[];
  animatePrompt?: boolean;
  onAnimationFinished?: () => void;
}> = ({
  cwd,
  files,
  directories,
  animatePrompt = false,
  onAnimationFinished = () => {},
}) => (
  <RenderOnReady
    onFinish={() => {
      onAnimationFinished();
    }}
  >
    <Prompt animate={animatePrompt} cwd={cwd} command={"ls -lrth"} />

    <>
      <p>total {8 * (files.length + directories.length)}</p>

      {directories.map(directory => (
        <Directory key={directory} name={directory} />
      ))}

      {files.map(fileName => (
        <FileListing key={fileName} name={fileName} />
      ))}
    </>
  </RenderOnReady>
);

export default DirectoryListing;
