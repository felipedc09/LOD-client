import React from "react";

type Props = {
  packages: Package[];
};
const InstanceDetail = ({ packages }: Props) => {
  return <div>isntance detail {packages.length}</div>;
};

export default InstanceDetail;
