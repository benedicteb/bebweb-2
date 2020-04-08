import React, { FC, Fragment } from "react";

import Prompt from "./Prompt";
import DirectoryLong from "./DirectoryLong";
import FileLong from "./FileLong";

import RenderOnReady from "./animation/RenderOnReady";
import Media from "react-media";
import DirectoryShort from "./DirectoryShort";
import FileShort from "./FileShort";
import { BREAK_POINTS } from "../mediaQueries";

const DirectoryListing: FC<{
  cwd?: string;
  files: string[];
  directories: string[];
  animatePrompt?: boolean;
  onAnimationFinished?: () => void;
}> = ({
  cwd = "~",
  files,
  directories,
  animatePrompt = false,
  onAnimationFinished = () => {},
}) => {
  return (
    <Media queries={BREAK_POINTS}>
      {matches => (
        <RenderOnReady
          onFinish={() => {
            onAnimationFinished();
          }}
        >
          <Prompt
            animate={animatePrompt}
            cwd={cwd}
            command={matches.small ? "ls" : "ls -lrth"}
          />

          <>
            <>
              {matches.small && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                  }}
                >
                  {directories.map(directory => (
                    <DirectoryShort key={directory} name={directory} />
                  ))}

                  {files.map(fileName => (
                    <FileShort key={fileName} name={fileName} />
                  ))}
                </div>
              )}
              {matches.large && (
                <>
                  <p>total {8 * (files.length + directories.length)}</p>

                  {directories.map(directory => (
                    <DirectoryLong key={directory} name={directory} />
                  ))}

                  {files.map(fileName => (
                    <FileLong key={fileName} name={fileName} />
                  ))}
                </>
              )}
            </>
          </>
        </RenderOnReady>
      )}
    </Media>
  );
};

export default DirectoryListing;
