import React, { FC, useState } from "react";
import colors from "../colors";
import useInterval from "../useInterval";
import LetterByLetter from "./animation/LetterByLetter";

const Prompt: FC<{
  command?: string;
  cwd?: string;
  blinkingCursor?: boolean;
  animate?: boolean;
  onAnimationFinished?: () => void;
}> = ({
  command = "",
  blinkingCursor = false,
  cwd = "~",
  animate = false,
  onAnimationFinished = () => {},
}) => (
  <p>
    <span style={{ color: colors.arrow }}>➜</span>{" "}
    <span style={{ color: colors.directory }}>{cwd}</span>{" "}
    {animate ? (
      <LetterByLetter
        onAnimationFinished={onAnimationFinished}
        text={command}
      />
    ) : (
      command
    )}
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
