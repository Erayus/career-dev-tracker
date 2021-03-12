import "./App.css";
import { Role } from "./components/role-card/role";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Backdrop, Container, Fade } from "@material-ui/core";
import { IRole } from "./models";
import ModalContent from "./components/modal-content/modalContent";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    modalContent: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      border: 0
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
  const [selectedRole, setSelectedRole] = useState<IRole>();

  const handleOpen = (roleId: number) => {
    let selectedRole = roles.find((role) => role.id === roleId);
    setSelectedRole(selectedRole);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Container className="App" maxWidth="lg">
        <Grid container justify="center" className={classes.root} spacing={4}>
          {roles.map((role: IRole) => (
            <Grid item xs>
              <Role
                key={role.id}
                roleId={role.id}
                title={role.title}
                description={role.description}
                clicked={(key: number) => handleOpen(key)}
              />
            </Grid>
          ))}
          <Modal
            // aria-labelledby="transition-modal-title"
            // aria-describedby="transition-modal-description"
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
              <ModalContent selectedRole={selectedRole!}/>
            </Fade>
          </Modal>
        </Grid>
      </Container>
  );
};

export default App;
