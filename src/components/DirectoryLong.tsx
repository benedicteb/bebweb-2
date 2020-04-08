import React, { FC } from "react";

import colors from "../colors";
import { Link } from "gatsby";

const DirectoryLong: FC<{ name: string; linkTo?: string }> = ({
  name,
  linkTo,
}) => (
  <p>
    drwxr-xr-x 1 benedicte internet 64B Apr 7 08:38{" "}
    {linkTo ? (
      <Link style={{ fontWeight: "bold", color: colors.directory }} to={linkTo}>
        {name}
      </Link>
    ) : (
      <span style={{ fontWeight: "bold", color: colors.directory }}>
        {name}
      </span>
    )}
  </p>
);

export default DirectoryLong;
