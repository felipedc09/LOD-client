import { Box, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import Card from "../Card/Card";
import Rating from "../Rating/Rating";
import useStyles from "./instanceCard.styles";

type Props = {
  instance: Instance;
};

const InstanceCard = (props: Props) => {
  const { instance } = props;
  const classes = useStyles();

  return (
    <Card title={instance.name} subHeader={instance.url} footer={<Rating />}>
      <>
        <Typography variant="body2" color="textSecondary">
          Other data
        </Typography>
        <Link href="/">
          <a>details...</a>
        </Link>
      </>
    </Card>
  );
};

export default InstanceCard;