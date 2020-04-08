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
}) => {
  const [animating, setAnimating] = useState(animate);

  return (
    <p>
      <span style={{ color: colors.arrow }}>➜</span>{" "}
      <span style={{ color: colors.directory }}>{cwd}</span>{" "}
      {animate ? (
        <>
          <LetterByLetter
            onAnimationFinished={() => {
              onAnimationFinished();
              setAnimating(false);
            }}
            text={command}
          />
          {animating ? <Cursor blinking={false} /> : null}
        </>
      ) : (
        command
      )}
      {blinkingCursor ? <Cursor /> : null}
    </p>
  );
};

const Cursor: FC<{ blinking?: boolean }> = ({ blinking = true }) => {
  let [visible, setVisible] = useState(true);

  useInterval(() => {
    setVisible(!visible);
  }, 1000);

  if (!visible && blinking) {
    return null;
  }

  return (
    <span style={{ backgroundColor: colors.cursor, color: colors.cursor }}>
      a
    </span>
  );
};

export default Prompt;
