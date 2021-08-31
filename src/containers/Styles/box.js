import React from "react";

export const BoxSpaceHeader = props => (
  <p className={`height-${props.value}`}>{props.children}</p>
);
