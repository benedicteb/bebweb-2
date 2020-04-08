import React, { FC } from "react";

const FileShort: FC<{ name: string }> = ({ name }) => (
  <p style={{ paddingRight: "15px" }}>{name}</p>
);

export default FileShort;
