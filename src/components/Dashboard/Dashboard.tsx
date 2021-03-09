import React from "react";
import { Divider, IconButton, TextField } from "@material-ui/core";
import InstanceList from "@/components/InstanceList/InstanceList";
import { MdAddBox } from "react-icons/md";
import useStyles from "./dashboard.styles";

const Dashboard = () => {
  const classes = useStyles();
  return (
    <>
      <h1>Ckan Repositories</h1>
      <form className={classes.form} noValidate autoComplete="off">
        <IconButton className={classes.button} aria-label="add">
          <MdAddBox />
        </IconButton>
        <TextField
          id="add-instance"
          label="Instance URL"
          size="small"
          variant="outlined"
        />
      </form>
      <Divider className={classes.divider} variant="middle" />
    </>
  );
};

export default Dashboard;
