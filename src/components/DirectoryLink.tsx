import React, { FC } from "react";
import { Link } from "gatsby";
import colors from "../colors";

const DirectoryLink: FC<{ name: string; target: string }> = ({
  name,
  target,
}) => (
  <p>
    drwxr-xr-x 2 benedicte internet 64B Apr 7 08:38{" "}
    <Link style={{ fontWeight: "bold", color: colors.directory }} to={target}>
      {name}
    </Link>
  </p>
);

export default DirectoryLink;
