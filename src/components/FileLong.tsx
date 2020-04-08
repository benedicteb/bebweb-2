import React, { FC } from "react";

const FileLong: FC<{ name: string }> = ({ name }) => (
  <p>-rw-r--r-- 1 benedicte internet 16B Apr 7 08:38 {name}</p>
);

export default FileLong;
