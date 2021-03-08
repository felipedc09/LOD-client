import { Box } from "@material-ui/core";
import { getInstances as getInstancesRequest } from "pages/api/instances";
import React, { useEffect, useState } from "react";
import Error from "../Error/Error";
import InstanceCard from "../InstanceCard/InstanceCard";
import useStyles from "./instanceList.styles";

const InstanceList = () => {
  const classes = useStyles();
  const [instances, setInstances] = useState<Instance[]>([]);
  const [error, setError] = useState<CustomError>();

  const getInstances = async () => {
    try {
      const instances = await getInstancesRequest();
      setInstances(instances);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getInstances();
  }, []);

  if (error) {
    return <Error error={error} />;
  }

  return (
    <Box className={classes.root}>
      {instances.map((instance) => (
        <InstanceCard key={instance.name} instance={instance} />
      ))}
    </Box>
  );
};

export default InstanceList;
