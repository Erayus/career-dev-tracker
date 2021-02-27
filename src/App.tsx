import "./App.css";
import { Role } from "./components/role-card/role";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";
import React, { Component } from "react";

class App extends Component<SampleProps> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
      roles: [
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
      ]
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      paper: {
        height: 140,
        width: 300,
      },
      control: {
        padding: theme.spacing(2),
      },
    })
  );
  classes = this.useStyles();
 
  render() {
    return (
      <div className="App">
        <Grid container justify="center" className={this.classes.root} spacing={10}>
          {this.state.roles.map((role) => (
            <Grid item xs>
              <Role
                key={role.id}
                title={role.title}
                description={role.description}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default App;
