import React, { FC, useState } from "react";
import colors from "../colors";
import useInterval from "../useInterval";

const Prompt: FC<{
  command?: string;
  cwd?: string;
  blinkingCursor?: boolean;
}> = ({ command = "", blinkingCursor = false, cwd = "~" }) => (
  <p>
    <span style={{ color: colors.arrow }}>➜</span>{" "}
    <span style={{ color: colors.directory }}>{cwd}</span> {command}
    {blinkingCursor ? <BlinkingCursor /> : null}
  </p>
);

const BlinkingCursor: FC = () => {
  let [visible, setVisible] = useState(true);

  useInterval(() => {
    setVisible(!visible);
  }, 1000);

  if (!visible) {
    return null;
  }

  return <span style={{ backgroundColor: "gray", color: "gray" }}>a</span>;
};

export default Prompt;
