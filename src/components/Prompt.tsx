import React, { FC } from "react";
import colors from "../colors";

const Prompt: FC<{ command: string; cwd?: string }> = ({
  command,
  cwd = "~",
}) => (
  <p>
    <span style={{ color: colors.arrow }}>➜</span>{" "}
    <span style={{ color: colors.directory }}>{cwd}</span> {command}
  </p>
);

export default Prompt;
