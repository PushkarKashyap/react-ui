import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles({
  searchButton: {
    background: "#283A46 0% 0% no-repeat padding-box",
    border: "1px solid #356680",
    borderRadius: "10px",
    color: "#FFFFFF",
    opacity: "1",
    textAlign: "left",
  },
});

function SearchComponent() {
  const classes = useStyles();
  return (
    <div>
      {/* <Button variant="outlined" color="primary" className={classes.searchButton} size="small" endIcon={<SearchIcon/>}>Search by invoice number</Button> */}
      {/* <TextField  label="Search by invoice number"  className={classes.searchButton} size="small" endIcon={<SearchIcon/>} /> */}

      {/* <Input  type="text" variant="outlined" color="primary"  placeholder="Search by invoice number" className={classes.searchButton} size="small" endIcon={<SearchIcon/>} ></Input> */}
      <TextField
        className={classes.searchButton}
        variant="outlined"
        placeholder="Search by invoice number"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default SearchComponent;
