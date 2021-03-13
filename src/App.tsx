import "./App.css";
import { Role } from "./components/role-card/role";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { Backdrop, Container, Fade } from "@material-ui/core";
import { IRole, SkillLevel } from "./models";
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
      border: 0,
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
      skills: [
        {
          name: "Problem Solving",
          level: SkillLevel.DEMONSTRATING,
          description: `Applies knowledge, judgement and solutions to problems. Identifies cause-effect relationships and applies a logical approach to solving problems. Makes decisions that align with the objectives and fit the appropriate time frame. Considers appropriate contingency plans and is able to make high impact decisions when lacking precedents.`,
          requirements: [
            "Gathers all relevant information from within own scope of responsibility.",
            "Identifies simple cause-effect relationships.",
            "Identifies a logical approach to solving problems.",
            "Generates relevant options for addressing problems and achieving desired outcomes.",
            "Weighs up alternatives according to their likely impact on self and immediate others. ",
            "Makes decisions that align with team objectives in a timeframe appropriate to the problem.",
          ],
          instructions: [
            "Recognize and interpret trends in information/data such as support cases",
            "Actively contribute during planning session/workshops",
            "Work with other members of the team to ensure that widespread issues are resolved",
          ],
          resources: [
            {
              title: "Play by Play: Problem Solving in a Developer World",
              url:
                "https://www.pluralsight.com/courses/play-by-play-problem-solving-developer-world",
            },
          ],
        },
        {
          name: "Inclusion",
          level: SkillLevel.UNDERSTANDING,
          description: `Recognizes and promotes the value of diverse teams. Seeks to make everyone feel welcome and safe to express their opinion. Stands up for others when they are feeling excluded and calls out bias when they see it.`,
          requirements: [
            "Must be aware of the concept involved with this trait and be working towards demonstrating in day to day activities.",
          ],
          instructions: [
            "Regularly invite others to join the conversation",
            "Show genuine consideration for perspectives other than your own",
            "Acknowledge and celebrate examples of where diversity has added benefit",
            "Learn more about your team members and share more about yourself",
            "Promote the involvement of remote employees and work to improve their experience"
          ],
          resources: [
            {
              title: "Fostering a Diverse and Inclusive Culture",
              url:
                "https://www.pluralsight.com/courses/fostering-diverse-inclusive-culture",
            },
            {
              title: "Building Healthy Interpersonal Relationships at Work",
              url:
                "https://www.pluralsight.com/courses/building-healthy-interpersonal-relationships-work",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Developer",
      description: "Description for Developer",
      skills: [
        {
          name: "",
          level: SkillLevel.DEMONSTRATING,
          description: ``,
          requirements: [
            `Must be aware of the concept involved with this trait and be working
          towards demonstrating in day to day activities.`,
          ],
          instructions: [
            "Recognize and interpret trends in information/data such as support cases",
          ],
          resources: [],
        },
      ],
    },
    {
      id: 3,
      title: "Senior Developer",
      description: "Description for Senior Developer",
      skills: [
        {
          name: "",
          level: SkillLevel.COACHING,
          description: ``,
          requirements: [
            `Must be aware of the concept involved with this trait and be working
          towards demonstrating in day to day activities.`,
          ],
          instructions: [
            "Recognize and interpret trends in information/data such as support cases",
          ],
          resources: [],
        },
      ],
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
        {roles.map((role: IRole, index) => (
          <Grid item xs key={index}>
            <Role
              roleId={role.id}
              title={role.title}
              description={role.description}
              clicked={(key: number) => handleOpen(key)}
            />
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
            <ModalContent selectedRole={selectedRole!} />
          </Fade>
        </Modal>
      </Grid>
    </Container>
  );
};

export default App;
