import React from "react";
import { TableCell, TableRow } from "@material-ui/core";

const Heading = () => {
  return (
    <TableRow>
      <TableCell>Cust Name</TableCell>
      <TableCell>Cust No</TableCell>
      <TableCell>Inv No</TableCell>
      <TableCell>Amount</TableCell>
      <TableCell>Due Date</TableCell>
      <TableCell>Notes</TableCell>
    </TableRow>
  );
};
export default Heading;