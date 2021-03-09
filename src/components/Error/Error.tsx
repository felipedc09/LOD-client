import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./error.styles";

type Props = {
  error: CustomError;
};

const Error = ({ error }: Props) => {
  const classes = useStyles();
  const code = error.code.toString();
  return (
    <Box className={classes.root}>
      <Typography variant="h3">{code}</Typography>
      <Typography variant="body2">{error.message}</Typography>
      <img src={`/static/images/errorCodes${error.image}`} alt={code} />
    </Box>
  );
};

export default Error;
