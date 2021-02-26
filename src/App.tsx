import "./App.css";
import { Role } from "./components/role-card/role";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid, { GridSpacing } from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) =>
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

function App() {
  const classes = useStyles();
  const data = [
    {
      id: 1,
      title: "Graduate Developer",
      description: "Description for Graduate Developer",
    },
    { 
      id: 2,
      title: "Developer", 
      description: "Description for Developer"
    },
    {
      id: 3,
      title: "Senior Developer",
      description: "Description for Senior Developer",
    },
  ];
  return (
    <div className="App">
      <Grid container justify="center" className={classes.root} spacing={10}>
        {data.map((role) => (
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

export default App;
