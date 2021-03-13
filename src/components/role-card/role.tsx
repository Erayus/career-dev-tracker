import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  CardMedia,
  Divider,
} from "@material-ui/core";

interface IProps {
  roleId: number;
  title: string;
  description: string;
  clicked: (key: number) => void;
}

const useStyles = makeStyles({
  root: {
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)",
  },
  content: {
    paddingTop: 40,
    display: "flex",
    height: 200,
    flexDirection: "column",
    textAlign: "left",
  },
  media: {
    height: 200,
    backgroundSize: "contain",
    backgroundColor: "grey",
  },
  actionBtn: {
    margin: "auto"
  }
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
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://cdn1.iconfinder.com/data/icons/developer-7/64/21_education_graduate_cap_code_development_developer_programmer-512.png"
          title="Contemplative Reptile"
        />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h4" component="h4">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions >
        <Button className={classes.actionBtn} size="small" variant="contained" color="primary" onClick={() => clicked(roleId)}>
          How To Be Successful In This Role
        </Button>
      </CardActions>
    </Card>
  );
};
