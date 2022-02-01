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
        display: "flex",
        background: "#EEB61B",
        color: "#FFF8F0",
        padding: 0,
        "&:after": {
          content: '""',
          height: "2px",
          position: "absolute",
          background: checked ? "white" : "transparent",
          width: "24rem",
          ml: "1rem",
          mt: "1.3rem",
        },
      }}
    >
      <TableCell sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={checked}
          onChange={() => setChecked((x) => !x)}
          sx={{ m: 0, p: 0 }}
        />
      </TableCell>
      <TableCell sx={{ width: "32px" }} scope="row">
        {item.name}
      </TableCell>
      <TableCell sx={{ maxWidth: "32px", textAlign: "center" }}>
        {item.item_quantity}
      </TableCell>
      <TableCell sx={{ width: "32px" }}>{item.choices}</TableCell>
    </TableRow>
  );
};

export default CheckListItem;
