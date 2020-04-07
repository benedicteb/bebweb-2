import React, { FC, useState } from "react";
import useInterval from "../useInterval";
import { LETTER_RENDER_DELAY_MILLIS } from "../animation";

const LetterByLetter: FC<{ text: string; onAnimationFinished: () => void }> = ({
  onAnimationFinished,
  text,
}) => {
  const [lettersRendered, setLettersRendered] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);

  useInterval(
    () => {
      setLettersRendered(lettersRendered + 1);

      if (lettersRendered === text.length) {
        setAnimationFinished(true);
        onAnimationFinished();
      }
    },
    animationFinished ? null : LETTER_RENDER_DELAY_MILLIS
  );

  return <>{text.slice(0, lettersRendered)}</>;
};

export default LetterByLetter;
