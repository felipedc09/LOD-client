import React from "react";
import {
  Card as MuiCard,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import { MdMoreVert } from "react-icons/md";
import useStyles from "./card.styles";

type Props = {
  title: string;
  subHeader: string;
  children: JSX.Element;
  footer: JSX.Element;
};

const Card = (props: Props) => {
  const { title, children, subHeader, footer } = props;
  const classes = useStyles();

  return (
    <MuiCard className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MdMoreVert />
          </IconButton>
        }
        title={title}
        subheader={subHeader}
      />
      <CardContent>{children}</CardContent>
      <CardActions disableSpacing>{footer}</CardActions>
    </MuiCard>
  );
};

export default Card;
