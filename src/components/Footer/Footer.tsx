import { Divider } from "@material-ui/core";
import React from "react";
import useStyles from "./footer.styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer>
      <Divider className={classes.divider} variant="middle" />
      <span>LOD - Ckan analyzer</span>
    </footer>
  );
};

export default Footer;
