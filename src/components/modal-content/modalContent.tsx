import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { IRole } from "../../models";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import green from "@material-ui/core/colors/green";

interface IProps {
  selectedRole: IRole;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modalContent: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      border: 0,
      borderRadius: 4,
      width: 300,
      [theme.breakpoints.up("sm")]: {
        width: 500,
      },
    },
    heading: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight: "bold",
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    icon: {
      verticalAlign: "bottom",
      height: 20,
      width: 20,
    },
    details: {
    },
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
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(0.5, 1),
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
      marginLeft: theme.spacing(1),
    },
  })
);
const ModalContent: React.FC<IProps> = ({ selectedRole }) => {
  const classes = useStyles();
  const skillsLevelColor = {
    understanding: green[500],
  };
  return (
    <div className={classes.modalContent}>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.headColumn}>
            <Typography className={classes.heading}>Compassion</Typography>
          </div>
          <div className={classes.headColumn}>
            <Typography className={classes.secondaryHeading}>
              <Chip
                className={classes.chip}
                style={{
                  backgroundColor: skillsLevelColor["understanding"],
                  color: "white",
                }}
                label="Understanding"
              />
            </Typography>
          </div>
        </AccordionSummary>
        <Divider />

        <AccordionDetails className={classes.details}>
          <div className={classes.contentLeftColumn}>
            <div>
              <Typography variant="subtitle1">Description:</Typography>
              <Typography variant="body2" paragraph>
                This is a description
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle1">Requirements:</Typography>
              <Typography variant="body2" paragraph>
                This is a requirement
              </Typography>
            </div>
            <div>
              <Typography variant="subtitle1">How:</Typography>
              <Typography variant="body2" paragraph>
                This is an instruction
              </Typography>
            </div>
          </div>
          <div className={clsx(classes.contentRightColumn, classes.helper)}>
            <Typography variant="subtitle1">Resources:</Typography>
            <ul>
              <li>
                <a
                  href="#secondary-heading-and-columns"
                  className={classes.link}
                >
                  Learn more more more more more more more more
                </a>
              </li>
            </ul>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ModalContent;
