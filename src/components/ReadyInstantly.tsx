import React, { FC, ReactNode, useEffect } from "react";

const ReadyInstantly: FC<{
  children?: ReactNode;
  onAnimationFinished?: () => void;
}> = ({ children, onAnimationFinished = () => {} }) => {
  useEffect(() => {
    onAnimationFinished();
  }, []);

  return <>{children}</>;
};

export default ReadyInstantly;
