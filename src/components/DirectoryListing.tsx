import Prompt from "./Prompt";
import React, { FC } from "react";
import Directory from "./Directory";
import FileListing from "./FileListing";

const DirectoryListing: FC<{
  cwd: string;
  files: string[];
  directories: string[];
}> = ({ cwd, files, directories }) => (
  <>
    <Prompt cwd={cwd} command={"ls -lrth"} />
    <p>total {8 * (files.length + directories.length)}</p>

    {directories.map(directory => (
      <Directory key={directory} name={directory} />
    ))}

    {files.map(fileName => (
      <FileListing key={fileName} name={fileName} />
    ))}
  </>
);

export default DirectoryListing;
