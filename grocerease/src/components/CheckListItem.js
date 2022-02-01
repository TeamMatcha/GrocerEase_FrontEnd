import * as React from "react";
import { Card, Box, Typography, Checkbox, Input } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const CheckListItem = ({ item }) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <TableRow
      key={item.name}
      sx={{
        background: "#EEB61B",
        color: "#FFF8F0",
      }}
    >
      <TableCell sx={{ width: "32px" }} scope="row" align="right">
        <Checkbox
          checked={checked}
          onChange={() => setChecked((x) => !x)}
          sx={{ m: 0, p: 0 }}
        />
      </TableCell>
      <TableCell sx={{ minWidth: "120px" }} scope="row">
        {item.name}
      </TableCell>
      <TableCell scope="row"> {item.item_quantity}</TableCell>
      <TableCell sx={{ minWidth: "48px" }}>{item.choices}</TableCell>
    </TableRow>
    // <TableRow
    //   key={item.name}
    //   sx={{
    //     display: "flex",
    //     background: "#EEB61B",
    //     color: "#FFF8F0",
    //     padding: 0,
    //     "&:after": {
    //       content: '""',
    //       height: "2px",
    //       position: "absolute",
    //       background: checked ? "white" : "transparent",
    //       width: "287px",
    //       ml: "16px",
    //       mt: "36px",
    //     },
    //   }}
    // >
    //   <TableCell sx={{ width: "32px", display: "flex", alignItems: "center" }}>

    //   </TableCell>
    //   <TableCell sx={{ width: "80px" }} scope="row">
    //     {item.name}
    //   </TableCell>
    //   <TableCell sx={{ width: "64px", textAlign: "center" }}>
    //     {item.item_quantity}
    //   </TableCell>
    //   <TableCell sx={{ width: "140px" }}>{item.choices}</TableCell>
    // </TableRow>
  );
};

export default CheckListItem;
