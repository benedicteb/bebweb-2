import React, { FC } from "react";
import colors from "../colors";

const Directory: FC<{ name: string }> = ({ name }) => (
  <p>
    drwxr-xr-x 1 benedicte internet 64B Apr 7 08:38{" "}
    <span style={{ fontWeight: "bold", color: colors.directory }}>{name}</span>
  </p>
);

export default Directory;
