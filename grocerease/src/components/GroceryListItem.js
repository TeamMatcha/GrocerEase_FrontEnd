import { useState } from "react";
import * as React from "react";
import axios from "axios";
import { Input } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const GroceryListItem = ({ item, token, onGrabList }) => {
  console.log(item);
  const [itemCount, setItemCount] = useState(item.item_quantity);

  const deleteItem = (item) => {
    axios
      .delete(
        `https://grocerease.herokuapp.com/grocerease/delete_item/${item.pk}/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then(() => {
        onGrabList();
      });
  };

  const handleUpdateQuantity = (event) => {
    axios.patch(
      `https://grocerease.herokuapp.com/grocerease/item_detail/${item.pk}/`,
      { item_quantity: itemCount },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      }
    );
  };

  return (
    <TableRow
      key={item.name}
      sx={{
        background: "#FFF8F0",
        color: "black",
      }}
    >
      <TableCell
        sx={{ width: "32px", borderBottom: "1px solid #EEB61B" }}
        scope="row"
      >
        {item.name}
      </TableCell>
      <TableCell
        sx={{
          borderBottom: "1px solid #EEB61B",
        }}
        scope="row"
      >
        <Input
          value={itemCount}
          onChange={(event) => setItemCount(event.target.value)}
          onBlur={handleUpdateQuantity}
          sx={{
            minWidth: "32px",
            textAlign: "center",
            color: "black",
          }}
        />
      </TableCell>
      <TableCell sx={{ width: "16px", borderBottom: "1px solid #EEB61B" }}>
        {item.choices}
      </TableCell>

      <TableCell
        sx={{ width: "32px", borderBottom: "1px solid #EEB61B" }}
        scope="row"
        align="right"
      >
        <IconButton
          onClick={(event) => {
            event.preventDefault();
            deleteItem(item);
          }}
        >
          <DeleteIcon sx={{ color: "black", fontSize: "20px", p: 0, m: 0 }} />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default GroceryListItem;
