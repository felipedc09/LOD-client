import React from "react";

type Props = {
  instance: InstanceDetail;
};
const InstanceDetail = ({ instance }: Props) => {
  return <div>isntance detail {JSON.stringify(instance)}</div>;
};

export default InstanceDetail;
