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
          width: "296px",
          ml: "16px",
          mt: "26px",
        },
      }}
    >
      <TableCell
        sx={{ width: "32px", borderBottom: "1px solid #EEB61B" }}
        scope="row"
        align="right"
      >
        <Checkbox
          checked={checked}
          onChange={() => setChecked((x) => !x)}
          sx={{ m: 0, p: 0 }}
        />
      </TableCell>
      <TableCell
        sx={{ minWidth: "120px", borderBottom: "1px solid #EEB61B" }}
        scope="row"
      >
        {item.name}
      </TableCell>
      <TableCell scope="row" sx={{ borderBottom: "1px solid #EEB61B" }}>
        {" "}
        {item.item_quantity}
      </TableCell>
      <TableCell sx={{ minWidth: "130px", borderBottom: "1px solid #EEB61B" }}>
        {item.choices}
      </TableCell>
    </TableRow>
  );
};

export default CheckListItem;
