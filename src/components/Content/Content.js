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

const Content = () => {
  return (
    <div className="content">
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
      </div>

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
    </div>
  );
};

export default Content;
