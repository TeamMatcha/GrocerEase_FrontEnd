import { useState } from "react";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Box,
  Card,
  CardMedia,
  rgbToHex,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import pattern from "../pattern_hexagon.png";
import "../groceryListItem.css";

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
    <Box>
      {/* <CardMedia
        image={pattern}
        height="10"
        component="img"
        style={{ height: "25px" }}
      /> */}
      <Card
        sx={{
          backgroundColor: "#EEB61B",
          width: "364px",
          margin: "2px",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <IconButton
            aria-label="delete"
            onClick={(event) => {
              event.preventDefault();
              deleteItem(item);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
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
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default GroceryListItem;
