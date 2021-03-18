import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  viewCorrespondance: {
    border: "1px solid #14AFF1",
    borderRadius: "10px",
    color: "#FFFFFF",
    opacity: "1",
  },
});
function ViewCorrespondance() {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        className={classes.viewCorrespondance}
      >
        View Correspondance
      </Button>
    </div>
  );
}

export default ViewCorrespondance;
