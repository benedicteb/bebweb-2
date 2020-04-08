import React, { FC } from "react";

import colors from "../colors";
import { Link } from "gatsby";

const DirectoryShort: FC<{ name: string; linkTo?: string }> = ({
  name,
  linkTo,
}) => (
  <>
    {linkTo ? (
      <Link
        style={{
          fontWeight: "bold",
          color: colors.directory,
          paddingRight: "15px",
        }}
        to={linkTo}
      >
        {name}
      </Link>
    ) : (
      <p
        style={{
          fontWeight: "bold",
          color: colors.directory,
          paddingRight: "15px",
        }}
      >
        {name}
      </p>
    )}
  </>
);

export default DirectoryShort;
