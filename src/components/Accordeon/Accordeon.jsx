import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
}));

export default function Accordeon(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      {createAccordeon({ ...props, expanded, handleChange, classes })}
    </div>
  );
}

function createAccordeon(props) {
  const { expanded, handleChange, classes, items } = props;
  return items.map((item, index) => {
    return (
      <ExpansionPanel
        expanded={expanded === "panel" + index}
        onChange={handleChange("panel" + index)}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={"panel" + index + "bh-content"}
          id={"panel" + index + "bh-header"}
        >
          <Typography className={classes.heading}>{item.title}</Typography>
          <Typography className={classes.secondaryHeading}>
            {item.description}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{item.content}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  });
}
