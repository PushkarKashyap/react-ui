import React from "react";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import RemoveIcon from "@material-ui/icons/Remove";
import SearchIcon from "@material-ui/icons/Search";
import Row from "../Row/Row";
import Button from "@material-ui/core/Button";
import EditButton from "./EditModal";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import SearchComponent from "./SearchContent";
import ViewCorrespondance from "./View";
import PredictButton from "./Predict";
import "./Content.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paperClass: {
    borderRadius: 10,
    opacity: 1,
    padding: "2vh 1.5vw" ,
    background: "#273D49CC 0% 0% no-repeat padding-box",
  },
  rghtBtnClass: {
    marginLeft: "1vw",
    minWidth: "5vw",
    minHeight: "2.188vw",
    fontSize: "0.95vw",
    border: "1px solid #14AFF1",
    borderRadius: "10px",
    alignSelf: "center",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#14AFF1",
      color: "white",
    },
  },
}));

const Content = () => {
  const classes = useStyles();

  const [search, setSearch] = React.useState(null);

  const onSearch = (event) => { // the callback. Use a better name
    console.log(event);
    setSearch();
  };


  return (
    /*     <div className="content">
      <div className="content__box">
        <div className="content__boxHeader">
          <div className="content__predict">
            <PredictButton />
          </div>

          <div className="content__correspondance">
            <ViewCorrespondance />
          </div>
        </div>

        <div className="content__other">
          <div className="content__add">
            <AddButton />
          </div>

          <div className="content__edit">
            <EditButton />
          </div>

          <div className="content__minimize">
            <DeleteButton />
          </div>

          <div className="content__searchBox">
            <SearchComponent />
          </div>
        </div>
      </div> */

    <div className={classes.root}>
      <Paper className={classes.paperClass}>
        <Grid container>
          <Grid item xs={6}>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              <PredictButton/>
              <ViewCorrespondance/>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <AddButton />
              <EditButton />
              <DeleteButton />
              <SearchComponent  onSearch={onSearch}/>
            </Grid>
          </Grid>
        </Grid>
      

      <Row
        name="Andrea James"
        id="2523532"
        invoice="73457346735"
        amount="122.87K"
        duedate="23-Jan-2021"
        paymentDate="--"
        agingBucket="--"
        notes="Lorem Ipsum dolor..."
      />
      </Paper>
    </div>
  );
};

export default Content;
