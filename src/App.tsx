import "./App.css";
import { Role } from "./components/role-card/role";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Backdrop, Fade } from "@material-ui/core";

interface IRole {
  id: number;
  title: string;
  description: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    control: {
      padding: theme.spacing(2),
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);
const App: React.FC<any> = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [roles, setRoles] = useState<IRole[]>([
    {
      id: 1,
      title: "Graduate Developer",
      description: "Description for Graduate Developer",
    },
    {
      id: 2,
      title: "Developer",
      description: "Description for Developer",
    },
    {
      id: 3,
      title: "Senior Developer",
      description: "Description for Senior Developer",
    },
  ]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Grid container justify="center" className={classes.root} spacing={10}>
        {roles.map((role) => (
          <Grid item xs>
            <Role
              key={role.id}
              title={role.title}
              description={role.description}
            />
            <button type="button" onClick={handleOpen}>
              react-transition-group
            </button>
          </Grid>
        ))}

<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
      </Grid>
    </div>
  );
};

export default App;
