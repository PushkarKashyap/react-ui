// import { Checkbox } from '@material-ui/core'
// import { DataGrid } from '@material-ui/data-grid'
// import React from "react";
//  import { withStyles, makeStyles } from '@material-ui/core/styles';
//  import Table from '@material-ui/core/Table';
//  import TableBody from '@material-ui/core/TableBody';
//  import TableCell from '@material-ui/core/TableCell';
//  import TableContainer from '@material-ui/core/TableContainer';
//  import TableHead from '@material-ui/core/TableHead';
//  import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// import './Row.css'
// import { FunctionsRounded } from '@material-ui/icons';

// // const columns = [
// //     { field: 'name', headerName: 'Customer Name', width: 158 },
// //     { field: 'id', headerName: 'Customer #', width: 130 },
// //     { field: 'invoice', headerName: 'Invoice #', width: 130 },
// //     {
// //         field: 'amount',
// //         headerName: 'Invoice Amount',
// //         type: 'number',
// //         width: 170,
// //     },
// //     {
// //         field: 'duedate',
// //         headerName: 'Due Date',
// //         width: 160,
// //     },
// //     {
// //         field: 'paymentdate',
// //         headerName: 'Predicted Payment Date',
// //         width: 180,
// //     },
// //     {
// //         field: 'agingBucket',
// //         headerName: 'Predicted Aging Bucket',
// //         width: 160,
// //     },
// //     {
// //         field: 'notes',
// //         headerName: 'Notes',
// //         width: 120,
// //     },
// // ];

// const StyledTableCell = withStyles((theme) => ({
//     head: {
//         backgroundColor: theme.palette.common.black,
//         color: theme.palette.common.white,
//     },
//     body: {
//         fontSize: 14,
//     },
// }))(TableCell);

// const StyledTableRow = withStyles((theme) => ({
//     root: {
//         '&:nth-child(odd)': {
//             backgroundColor: "blue",
//         },
//     },
// }))(TableRow);

// function createData(name, id, invoice, amount, duedate, paymentDate, agingBucket, notes) {
//     return { name, id, invoice, amount, duedate, paymentDate, agingBucket, notes };
// }

// const rows = [
//     createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
//     createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
//     createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
//     createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
//     createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
//     createData('Andrea James', 2523532, 73457346735, '122.87K', '23-Jan-2021', '--', '--', 'Lorem Ipsum dolor...'),
// ];

// const useStyles = makeStyles({
//     table: {
//         minWidth: 700,
//         color: '#97A1A9'
//     },
//     checked: {

//     },
//     root: {
//         // color:"blue",
//         "&$checked": {
//             color:"#14AFF1"
//         }
//     },
// });

// const Row = ({ name, id, invoice, amount, duedate, paymentDate, agingBucket, notes }) => {
//     const classes = useStyles();

//     const HandleClick =()=> {
//         const [checked, setChecked] = React.useState(false)
//         setChecked(true)
//     }
//     return (
//         <div className='row'>
//             <TableContainer>
//                 <Table aria-label="customized table">
//                     <TableHead>
//                         <TableRow>
//                         <StyledTableCell><Checkbox classes={{root:classes.root, checked:classes.checked}} onClick={HandleClick}></Checkbox></StyledTableCell>
//                             <StyledTableCell>Customer Name</StyledTableCell>
//                             <StyledTableCell align="right">Customer #</StyledTableCell>
//                             <StyledTableCell align="right">Invoice #</StyledTableCell>
//                             <StyledTableCell align="right">Invoice Amount</StyledTableCell>
//                             <StyledTableCell align="right">Due Date</StyledTableCell>
//                             <StyledTableCell align="right">Predicted Payment Date</StyledTableCell>
//                             <StyledTableCell align="right">Predicted Aging Bucket</StyledTableCell>
//                             <StyledTableCell align="right">Notes</StyledTableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {rows.map((row) => (

//                             <StyledTableRow key={row.name}>
//                                 <StyledTableCell><Checkbox classes={{root:classes.root, checked:classes.checked}}></Checkbox></StyledTableCell>
//                                 <StyledTableCell component="th" scope="row">
//                                     {row.name}
//                                 </StyledTableCell>
//                                 <StyledTableCell align="right">{row.id}</StyledTableCell>
//                                 <StyledTableCell align="right">{row.invoice}</StyledTableCell>
//                                 <StyledTableCell align="right">{row.amount}</StyledTableCell>
//                                 <StyledTableCell align="right">{row.duedate}</StyledTableCell>
//                                 <StyledTableCell align="right">{row.paymentDate}</StyledTableCell>
//                                 <StyledTableCell align="right">{row.agingBucket}</StyledTableCell>
//                                 <StyledTableCell align="right">{row.notes}</StyledTableCell>
//                             </StyledTableRow>
//                         ))}
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//         </div>
//     )
// }

// export default Row

// import "./styles.css";
import React from "react";
import axios from "axios";
import "./Row.css";
import Heading from "../Content/Heading";
import {
  Checkbox,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  checked: {},
  root: {
    // color:"blue",
    "&$checked": {
      color: "#14AFF1",
    },
    padding: "3px",
    borderBottom: "none",
    color: "#FFFFFF",
  },
  TableContainer: {
    height: "510px",
    "&::-webkit-scrollbar": {
      width: "5px",
    },
    "&::-webkit-scrollbar-track": {
      background: "#273D49CC",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#61707B",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#ccc",
    },
  },
  scroll: {
    // position:"fixed",
    // width:"3000px"
  },
  tableBody: {
    position: "relative",
  },
  table: {
    minWidth: 700,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    color: "#97A1A9",
  },
  body: {
    color: "#ffffff",
    border: "0px",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#283A46",
    },
  },
}))(TableRow);

export default function App() {
  const classes = useStyles();
  const [responseData, setResponseData] = React.useState([]);
  const [isNext, setNext] = React.useState(false);
  const [pageCount, setCount] = React.useState(1);
  const [selected, setSelected] = React.useState([]);
  const loadMoreData = () => {
    setCount(pageCount + 10);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = responseData.map((n) => n.docId);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
    console.log(selected);
  };

  const handleClick = (event, docId, total_open_amount, notes) => {
    const selectedIndex = selected.indexOf(docId);
    let newSelected = [];
    let newAmount = [];
    let newNotes = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, docId);
      // newAmount = newAmount.concat(totalOpenAmount, amount);
      // newNotes = newNotes.concat(Notes, notes)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
      // newAmount = newAmount.concat(totalOpenAmount, slice(1));
      // newNotes = newNotes.concat(Notes, slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
      // newAmount = newAmount.concat(totalOpenAmount.slice(0, -1));
      // newNotes = newNotes.concat(notes, slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
    console.log(newSelected);
  };
  const isSelected = (rowId) => selected.indexOf(rowId) !== -1;
  React.useEffect(() => {
    // if (pageCount !== -1) {
    //   setNext(true);
    axios
      .get(`http://localhost:8080/1806138/listInvoice?page=${pageCount}`)
      .then((response) => {
        setResponseData((prev) => [...prev, ...response.data]);
        setNext(true);
      })
      .catch((error) => {
        console.log(error);
      });
    // }
  }, [pageCount]);

  return (
    // <div className="App" id="scrollable">
    <TableContainer id="scrollable" className={classes.TableContainer}>
      <InfiniteScroll
        dataLength={responseData.length}
        next={loadMoreData}
        hasMore={isNext}
        loader={
          <div
            style={{
              height: "80%",
              paddingLeft: "35%",
              overflow: "hidden",
            }}
          >
            {/* Loading.... */}
            <CircularProgress />
          </div>
        }
        scrollableTarget="scrollable"
      >
        {
          <div>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <StyledTableCell className={classes.root}>
                    <Checkbox
                      padding="checkbox"
                      classes={{ root: classes.root, checked: classes.checked }}
                      onChange={handleSelectAllClick}
                      checked={
                        responseData.length > 0 &&
                        selected.length === responseData.length
                      }
                    />
                  </StyledTableCell>
                  <StyledTableCell>Cust Name</StyledTableCell>
                  <StyledTableCell>Cust No</StyledTableCell>
                  <StyledTableCell>Inv No</StyledTableCell>
                  <StyledTableCell>Amount</StyledTableCell>
                  <StyledTableCell>Due Date</StyledTableCell>
                  <StyledTableCell>Delay</StyledTableCell>
                  <StyledTableCell>Predicted Ageing Bucket</StyledTableCell>
                  <StyledTableCell>Notes</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody className={classes.tableBody}>
                {responseData.map((data, index) => {
                  const isItemSelected = isSelected(data.docId);
                  return (
                    <>
                      <StyledTableRow
                        onClick={(event) =>
                          handleClick(
                            event,
                            data.docId,
                            data.total_open_amount,
                            data.notes
                          )
                        }
                        // role="checkbox"
                        // aria-checked={isItemSelected}
                        key={data.docId}
                        // selected={isItemSelected}
                      >
                        <StyledTableCell className={classes.root}>
                          <Checkbox
                            padding="checkbox"
                            classes={{
                              root: classes.root,
                              checked: classes.checked,
                            }}
                            checked={isItemSelected}
                            inputProps={{ "aria-label": "primary checkbox" }}
                          />
                        </StyledTableCell>
                        <StyledTableCell>{data.nameCustomer}</StyledTableCell>
                        <StyledTableCell>{data.custNumber}</StyledTableCell>
                        <StyledTableCell>{data.docId}</StyledTableCell>
                        <StyledTableCell>
                          {data.totalOpenAmount}
                        </StyledTableCell>
                        <StyledTableCell>{data.dueInDate}</StyledTableCell>
                        <StyledTableCell>--</StyledTableCell>
                        <StyledTableCell>--</StyledTableCell>
                        <StyledTableCell>{data.notes}</StyledTableCell>
                      </StyledTableRow>
                    </>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        }
      </InfiniteScroll>
    </TableContainer>
    // </div>
  );
}
