import * as React from "react";
import { Checkbox } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const CheckListItem = ({ item }) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <TableRow
      key={item.name}
      sx={{
        background: "#FFF8F0",
        color: "black",
        display: "flex",
        fontColor: "black",
        padding: 0,
        "&:after": {
          content: '""',
          height: "2px",
          position: "absolute",
          background: checked ? "black" : "transparent",
          width: "287px",
          ml: "16px",
          mt: "24px",
        },
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
