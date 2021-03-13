import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { IRole, ISkillLevels, SkillLevel } from "../../models";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import { blue, deepPurple, orange, green } from "@material-ui/core/colors";
interface IProps {
  selectedRole: IRole;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modalContent: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      border: 0,
      borderRadius: 4,
      width: 300,
      [theme.breakpoints.up("sm")]: {
        width: 800,
      },
      maxHeight: window.innerHeight - 100,
      overflowY: "auto",
    },
    modalContentHeader: {
      textAlign: "center",
      padding: theme.spacing(3, 4),
      fontWeight: "bolder",
    },
    modalContentBody: {
      padding: theme.spacing(2, 4, 3),
    },
    heading: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: "bold",
    },
    icon: {
      verticalAlign: "bottom",
      height: 20,
      width: 20,
    },
    details: {},
    headColumn: {
      display: "flex",
      flexBasis: "40%",
      alignItems: "center",
    },
    contentLeftColumn: {
      flexBasis: "60%",
    },
    contentRightColumn: {
      flexBasis: "40%",
      borderLeft: `2px solid ${theme.palette.divider}`,
    },
    helper: {
      padding: theme.spacing(0.5, 2),
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: "none",
      textAlign: "left",
      flexWrap: "wrap",
      "&:hover": {
        textDecoration: "underline",
      },
    },
    chip: {
      position: "absolute",
      right: 50
    },
  })
);
const ModalContent: React.FC<IProps> = ({ selectedRole }) => {
  const classes = useStyles();
  const getSkillsLevelColor = (skillsLevelColor: ISkillLevels): string => {
    switch (skillsLevelColor) {
      case SkillLevel.UNDERSTANDING:
        return green[500];
      case SkillLevel.DEMONSTRATING:
        return blue[500];
      case SkillLevel.LEADING:
        return deepPurple[500];
      case SkillLevel.COACHING:
        return orange[500];
      default:
        return "#fff";
    }
  };

  const accordion = selectedRole.skills.map((skill, index) => (
    <Accordion key={index}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1c-content"
        id="panel1c-header"
      >
        <Typography className={classes.heading}>{skill.name}</Typography>
        <Chip
          className={classes.chip}
          style={{
            backgroundColor: getSkillsLevelColor(skill.level),
            color: "white",
          }}
          label={skill.level}
        />
      </AccordionSummary>
      <Divider />

      <AccordionDetails className={classes.details}>
        <div className={clsx(classes.contentLeftColumn, classes.helper)}>
          <div>
            <Typography variant="subtitle1"> <strong>Description:</strong></Typography>
            <Typography variant="body2" paragraph>
              {skill.description}
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle1"><strong>Requirements:</strong></Typography>
            <ul>
              {skill.requirements.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
          <div>
            <Typography variant="subtitle1"><strong>How:</strong></Typography>
            <ul>
              {skill.instructions.length > 0
                ? skill.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))
                : "No data yet"}
            </ul>
          </div>
        </div>
        <div className={clsx(classes.contentRightColumn, classes.helper)}>
          <Typography variant="subtitle1"><strong>Resources:</strong></Typography>
          <ul>
            {skill.resources.length > 0
              ? skill.resources.map((resource, index) => (
                  <li key={index}>
                    <a href={resource.url} className={classes.link}>
                      {resource.title}
                    </a>
                  </li>
                ))
              : "No data yet"}
          </ul>
        </div>
      </AccordionDetails>
    </Accordion>
  ));

  return (
    <div className={classes.modalContent}>
      <div className={classes.modalContentHeader}>
        <Typography variant="h5">
          How to be successful in {selectedRole.title} role
        </Typography>
      </div>
      <Divider />
      <div className={classes.modalContentBody}>{accordion}</div>
    </div>
  );
};

export default ModalContent;
