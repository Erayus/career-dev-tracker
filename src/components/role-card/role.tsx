import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button, CardActions } from "@material-ui/core";

interface IProps {
  roleId: number;
  title: string;
  description: string;
  clicked: (key: number) => void;
}

const useStyles = makeStyles({
  root: {},
  media: {
    display: "flex",
    height: 300,
    justifyContent: "center",
    flexDirection: "column",
  },
});

export const Role: React.FC<IProps> = ({
  roleId,
  title,
  description,
  clicked,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.media}>
        <Typography gutterBottom variant="h4" component="h4">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <CardActions>
          <Button size="small" color="primary" onClick={() => clicked(roleId)}>
            Learn More
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
