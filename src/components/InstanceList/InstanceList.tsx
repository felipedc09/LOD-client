import React from "react";
import { Box } from "@material-ui/core";
import InstanceCard from "../InstanceCard/InstanceCard";
import useStyles from "./instanceList.styles";

type Props = {
  instances: Instance[];
};

const InstanceList = ({ instances }: Props) => {
  const classes = useStyles();

  return (
    <Box className={classes.list}>
      {instances.map((instance) => (
        <InstanceCard key={instance.name} instance={instance} />
      ))}
    </Box>
  );
};

export default InstanceList;
