import React from "react";
// material-ui
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import CardFooter from "components/Card/CardFooter";
import CustomInput from "components/CustomInput/CustomInput";
import Button from "components/CustomButtons/Button";

import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import MoodIcon from "@material-ui/icons/Mood";
import MoodBadIcon from "@material-ui/icons/MoodBad";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import tooltipStyle from "assets/jss/material-dashboard-react/tooltipStyle";
import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle";
import { addInstance, instances } from "./instancesView.module.css";
import { Link } from "react-router-dom";

var styles = {
  ...dashboardStyle,
  cardTitle: {
    marginTop: "0",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  tooltipStyle
};

const useStyles = makeStyles(styles);

export default function InstancesView(props) {
  const classes = useStyles();
  return (
    <div className={instances}>
      <h3>Add new instance</h3>
      {renderAddInstance(props)}
      <br />
      <h3>Current instances</h3>
      {renderInstances({ ...props, classes })}
    </div>
  );
}

function renderAddInstance(props) {
  return (
    <div className={addInstance}>
      <CustomInput
        labelText="Instance URL"
        id="float"
        inputProps={{
          onChange: props.updateField,
          name: "instanceUrl"
        }}
        formControlProps={{
          fullWidth: true
        }}
      />
      <br />
      <CustomInput
        labelText="Instance name"
        id="float"
        inputProps={{
          onChange: props.updateField,
          name: "instanceName"
        }}
        formControlProps={{
          fullWidth: true
        }}
      />
      <br />
      <br />
      <Button onClick={props.postInstance} color="info">
        Add instance
      </Button>
    </div>
  );
}

function renderInstances(props) {
  const { instances } = props;
  return (
    <GridContainer>
      {instances.map((instance, index) => {
        return (
          <GridItem xs={3} sm={3} md={3} key={index}>
            {instanceCard({ instance, ...props })}
          </GridItem>
        );
      })}
    </GridContainer>
  );
}

function instanceCard(props) {
  const { instance, classes } = props;
  return (
    <Card>
      <CardHeader>
        <h4 className={classes.cardTitle}>{instance.name}</h4>
        {/* <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton> */}
        <p>{"Number of datasets " + instance.count}</p>
      </CardHeader>
      <CardBody>
        <p>Metadata...</p>
        <Button color="info" onClick={()=>props.updateInstance(instance)} component={Link} to={"datasets"}>
          Go datasets
        </Button>
      </CardBody>
      <CardFooter>
        {renderClassificationsDatasets({
          classifications: instance.classifications,
          ...props
        })}
      </CardFooter>
    </Card>
  );
}

function renderClassificationsDatasets(props) {
  const classifications = [
    { name: "accesibility", state: 0.5 },
    { name: "reuse", state: 1 },
    { name: "update", state: 0.2 },
    { name: "licences", state: 0.9 },
    { name: "notes", state: 0.3 }
  ];
  return classifications.map((aspect, index) =>
    getAspectStateIcon({ aspect, index, ...props })
  );
}

function getAspectStateIcon(props) {
  const { aspect, classes, index } = props;
  let colorState = "warning";
  let iconState = <MoodIcon />;
  if (aspect.state > 0.5) {
    colorState = "success";
  }
  if (aspect.state < 0.5) {
    colorState = "danger";
    iconState = <MoodBadIcon />;
  }
  return (
    <Tooltip
      key={index}
      id="tooltip-bottom"
      title={aspect.name + " " + aspect.state * 100 + "%"}
      placement="bottom"
      classes={{ tooltip: classes.tooltipStyle }}
      arrow
    >
      <Button justIcon round color={colorState}>
        {iconState}
      </Button>
    </Tooltip>
  );
}
