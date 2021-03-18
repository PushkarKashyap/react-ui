import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  predict: {
    background: "#97a1a9 0% 0% noRepeat paddingBox",
    borderRadius: "10px",
    opacity: "1",
  },
});
function PredictButton() {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" className={classes.predict}>
        Predict
      </Button>
    </div>
  );
}

export default PredictButton;
