import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const useStyles = makeStyles({
  add: {
    // top: "20px",
    // left: "250px",
    // width: "99px",
    // height: "30px",
    border: "1px solid #14AFF1",
    borderRadius: "10px",
    //font: "normal normal normal 20px/24px Ubuntu",
    //letterSpacing: "0px",
    color: "#FFFFFF",
    opacity: "1",
  },
  //   box: {
  //     background: "#2A3E4C 0% 0% no-repeat padding-box",
  //     boxShadow: "0px 8px 24px #00000029",
  //     borderRadius: "6",
  //     opacity: "1",
  //   },
  modalBackground: {
    backgroundColor: "#2A3E4C",
  },
  saveButton: {
    background: "#14AFF1 0% 0% no-repeat padding-box",
  },
});

function AddButton() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  // const addData = () => {
  //     axios({
  //       method: 'post',
  //       url: 'http://localhost:8080/1806138/add',
  //       data: formData,
  //       config: config
  //     })
  //     .then(response => {
  //       console.log(response);
  //     })
  // }
  const addData = () => {
    try {
      const response = axios.post(
        "http://localhost:8080/1806138/add",
        {},
        {
          headers: { "Content-Type": "x-www-form-urlencoded" },
          params: {
            nameCustomer: CustomerName,
            custNumber: CustomerNo,
            invoiceId: InvNo,
            totalOpenAmount: TotalAmount,
            dueInDate: DueInDate,
            notes: Notes,
          },
        }
      );

      console.log("Returned data:", response);
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const config = {
    headers: { "content-type": "application/x-www-form-urlencoded" },
  };
  const [CustomerName, setCustomerName] = React.useState();
  const [CustomerNo, setCustomerNo] = React.useState();
  const [InvNo, setInvNo] = React.useState();
  const [TotalAmount, setTotalAmount] = React.useState();
  const [DueInDate, setDueInDate] = React.useState();
  const [Notes, setNotes] = React.useState();

  // const formData = {
  //     nameCustomer:CustomerName,
  //     custNumber:CustomerNo,
  //     docId:InvNo,
  //     totalOpenAmount:TotalAmount,
  //     dueInDate:DueInDate,
  //     notes:Notes
  // }

  const CustName = (e) => {
    setCustomerName(e.target.value);
  };
  const CustNo = (e) => {
    setCustomerNo(e.target.value);
  };
  const InvoiceNo = (e) => {
    setInvNo(e.target.value);
  };
  const Amount = (e) => {
    setTotalAmount(e.target.value);
  };
  const DueDate = (e) => {
    setDueInDate(e.target.value);
  };
  const Anote = (e) => {
    setNotes(e.target.value);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        className={classes.add}
        size="small"
        startIcon={<AddIcon />}
        onClick={handleClickOpen}
      >
        Add
      </Button>
      <Dialog
        className={classes.box}
        open={open}
        keepMounted
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className={classes.modalBackground}>
          <Grid container xs={12}>
            <Grid item xs={5}>
              {"Add Invoice"}
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={1}>
              <IconButton edgeEnd="end" onClick={handleClose}>
                <CloseIcon />{" "}
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent className={classes.modalBackground}>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              Customer Name
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="nameCustomer"
                type="text"
                variant="outlined"
                onChange={CustName}
              />
            </Grid>
            <Grid item spacing={1}>
              {" "}
            </Grid>
            <Grid item xs={2}>
              Due Date
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="dueInDate"
                type="date"
                variant="outlined"
                onChange={DueDate}
              />
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={3}>
                Customer No.
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="custNumber"
                  type="text"
                  variant="outlined"
                  onChange={CustNo}
                />
              </Grid>
              <Grid item spacing={1}>
                {" "}
              </Grid>
              <Grid item xs={2}>
                Notes
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="filled-multiline"
                  multiline
                  rows={4}
                  type="text"
                  variant="outlined"
                  onChange={Anote}
                />
              </Grid>
            </Grid>

            <Grid item spacing={1}>
              {" "}
            </Grid>
            <Grid container spacing={12}>
              <Grid item xs={2}>
                Invoice No.
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="docId"
                  placeholder="invoice No"
                  variant="outlined"
                  onChange={InvoiceNo}
                />
              </Grid>
            </Grid>

            <Grid item spacing={1}>
              {" "}
            </Grid>
            <Grid container spacing={12}>
              <Grid item xs={2}>
                Invoice Amount.
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="totalOpenAmount"
                  placeholder="invoice Amount"
                  variant="outlined"
                  onChange={Amount}
                />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions className={classes.modalBackground}>
          <Grid container xs={12}>
            <Grid item xs={2}>
              <Button onClick={handleClose} color="primary">
                CANCEL
              </Button>
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={2}>
              <Button onClick={handleClose} variant="outlined" color="primary">
                RESET
              </Button>
            </Grid>

            <Grid item xs={2}>
              <Button
                onClick={() => {
                  addData();
                  handleClose();
                }}
                color="primary"
                className={classes.saveButton}
              >
                SAVE
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddButton;
