import { Box, Typography } from "@material-ui/core";
import React from "react";

type Props = {
  error: CustomError;
};

const Error = ({ error }: Props) => {
  const code = error.code.toString();
  return (
    <Box>
      <Typography variant="h3">{code}</Typography>
      <Typography variant="body2">{error.message}</Typography>
      <img src={error.image} alt={code} />
    </Box>
  );
};

export default Error;
