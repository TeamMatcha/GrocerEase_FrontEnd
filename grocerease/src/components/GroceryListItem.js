import { useState } from "react";
import * as React from "react";
import axios from "axios";
import { Input, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Typography, Box, Card } from "@mui/material";
import pattern from "../pattern_hexagon.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { DataGrid } from "@mui/x-data-grid";

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
        console.log("here");
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
    <TableContainer>
      <Table sx={{ minWidth: "225px" }} aria-label="simple table">
        <TableBody>
          <TableRow
            key={item.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {item.name}
            </TableCell>
            <TableCell
              sc={{
                width: "10px",
              }}
            >
              {itemCount}
            </TableCell>
            <TableCell
              component="th"
              scope="row"
              onChange={(event) => setItemCount(event.target.value)}
              onBlur={handleUpdateQuantity}
            >
              {item.choices}
            </TableCell>
            <TableCell component="th" scope="row" align="right">
              <IconButton
                aria-label="delete"
                onClick={(event) => {
                  event.preventDefault();
                  deleteItem(item);
                }}
              >
                <DeleteIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        </TableBody>
        {/* <IconButton
          aria-label="delete"
          onClick={(event) => {
            event.preventDefault();
            deleteItem(item);
          }}
        >
          <DeleteIcon />
        </IconButton>

        <Typography
          sx={{
            fontSize: "24px",
          }}
        >
          {item.name}
        </Typography>

        <input
          className="item_count"
          type="number"
          value={itemCount}
          onChange={(event) => setItemCount(event.target.value)}
          onBlur={handleUpdateQuantity}
        ></input>

        <Typography
          sx={{
            margin: "8px",
            fontSize: "24px",
          }}
        >
          ct.
        </Typography>

        <Typography
          sx={{
            display: "flex",
            alignItems: "flex-end",
            fontSize: "20px",
          }}
        >
          {item.choices}
        </Typography> */}
      </Table>
    </TableContainer>
  );
};

export default GroceryListItem;
