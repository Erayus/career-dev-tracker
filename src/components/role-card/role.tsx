import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

interface IProps {
  title: string;
  description: string;
}

const useStyles = makeStyles({
  root: {
  },
  media: {
    display: 'flex',
    height: 300,
    justifyContent: 'center',
    flexDirection: 'column'
  },
});

export const Role: React.FC<IProps> = ({title, description}) => {
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
      </CardContent>
    </Card>
  );
};
