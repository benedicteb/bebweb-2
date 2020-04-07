import React, { cloneElement, FC, ReactElement, useState } from "react";

const RenderOnReady: FC<{
  children: ReactElement[];
  onFinish?: () => void;
}> = ({ children, onFinish = () => {} }) => {
  const [renderedComponents, setRenderedComponents] = useState(1);

  const onAnimationFinished = () => {
    setRenderedComponents(renderedComponents + 1);

    if (renderedComponents === children.length - 1) {
      onFinish();
    }
  };

  return (
    <>
      {children
        .slice(0, renderedComponents)
        .map((child, index) =>
          cloneElement(child, { key: index, onAnimationFinished })
        )}
    </>
  );
};

export default RenderOnReady;
