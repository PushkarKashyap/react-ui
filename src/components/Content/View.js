import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  viewCorrespondance: {
    fontFamily: "Ubuntu",
    font: "normal normal normal 20px/24px Ubuntu",
    border: "1px solid #14AFF1",
    borderRadius: "10px",
    color: "#FFFFFF",
    opacity: "1",
    marginRight: "1vw",
    // fontSize: "0.95vw",
    alignSelf: "center",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#14AFF1",
      color: "white",
      textTransform: "none",
    },
  },
});
function ViewCorrespondance() {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="outlined"
        className={classes.viewCorrespondance}
        //size="small"
      >
        View Correspondance
      </Button>
    </div>
  );
}

export default ViewCorrespondance;
