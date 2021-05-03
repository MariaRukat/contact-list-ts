import React, { FC, memo } from "react";

const Loader: FC = () => (
  <div className="loader">
    <div className="loader-inner" />
    <div className="loader-inner" />
    <div className="loader-inner" />
  </div>
);

export default memo(Loader);
