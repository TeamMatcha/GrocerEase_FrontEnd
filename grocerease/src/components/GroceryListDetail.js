import axios from "axios";
import { useEffect, useState } from "react";
import "../groceryListDetail.css";
import GroceryListItem from "./GroceryListItem";
import { useLocation, useNavigate } from "react-router-dom";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Container, TextField, MenuItem, Button, Box } from "@mui/material";

const GroceryListDetail = ({ token }) => {
  const location = useLocation();
  let listId = location.search.split("=")[1];
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  const [listName, setListName] = useState("");
  const [choices, setChoices] = useState("Produce");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(
        `https://grocerease.herokuapp.com/grocerease/list_detail/${listId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        setListName(res.data.name);
      });
    axios
      .get(
        `https://grocerease.herokuapp.com/grocerease/lists/${listId}/items/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res, "get items");
        // const newItems = [...items, ...res.data];
        setItems(res.data);
      });
  }, []);

  const GrabList = () => {
    axios
      .get(
        `https://grocerease.herokuapp.com/grocerease/lists/${listId}/items/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        setItems(res.data);
      });
  };

  const onAddProduct = (event) => {
    event.preventDefault();
    console.log(choices);
    axios
      .post(
        `https://grocerease.herokuapp.com/grocerease/lists/${listId}/items/`,
        {
          name: value,
          quantity: 1,
          choices: choices,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res, "items endpoint");
        setItems([...items, res.data]);
      });
  };
  const saveList = () => {
    axios
      .patch(
        `https://grocerease.herokuapp.com/grocerease/edit_list/${listId}/`,
        {
          name: listName,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then(() => {
        navigate("/lists");
      });
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#FFF8F0",
        padding: "16px",
        minHeight: "100vh",
      }}
      component="div"
    >
      <Box>
        <Box
          sx={{
            backgroundColor: "#FFF8F0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "16px",
            borderRadius: "5px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="List Name"
            variant="outlined"
            color="primary"
            value={listName}
            onChange={(event) => setListName(event.target.value)}
            component="div"
            sx={{
              width: "364px",
              height: "32px",
              color: "black",
              borderColor: "black",
              ".MuiOutlinedInput-": { outlineColor: "#000" },
            }}
          />
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <TextField
                id="outlined-basic"
                placeholder="Add Products"
                variant="outlined"
                color="primary"
                value={value}
                onChange={(event) => setValue(event.target.value)}
                component="div"
                sx={{
                  marginTop: "10px",
                  width: "364px",
                  height: "32px",
                  color: "black",
                  borderColor: "black",
                  ".MuiOutlinedInput-": { outlineColor: "#000" },
                }}
              ></TextField>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
            }}
          >
            <TextField
              sx={{
                "& .MuiSelect-select": { padding: "3px 10px" },
                marginTop: "10px",
                "& label": { background: "#FFF8F0", px: 1, py: 0 },
                width: "297px",
                height: "32px",
              }}
              select
              label="Category"
              labelWidth={250}
              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={(event) => setChoices(event.target.value)}
              value={choices}
            >
              <MenuItem value="Produce">Produce</MenuItem>
              <MenuItem value="Dairy">Dairy</MenuItem>
              <MenuItem value="Baked Goods">Baked Goods</MenuItem>
              <MenuItem value="Meat and Fish">Meat and Fish</MenuItem>
              <MenuItem value="Snacks">Snacks</MenuItem>
              <MenuItem value="Alcohol">Alcohol</MenuItem>
              <MenuItem value="Canned Goods">Canned Goods</MenuItem>
              <MenuItem value="Dry Goods">Dry Goods</MenuItem>
              <MenuItem value="Sauces and Condiments">
                Sauces and Condiments
              </MenuItem>
              <MenuItem value="Herbs and Spices">Herbs and Spices</MenuItem>
              <MenuItem value="Non-Alcoholic Beverages">
                Non-Alcoholic Beverages
              </MenuItem>
              <MenuItem value="Household and Cleaning">
                Household and Cleaning
              </MenuItem>
              <MenuItem value="Health and Beauty">Health and Beauty</MenuItem>
              <MenuItem value="Pet Care">Pet Care</MenuItem>
              <MenuItem value="Frozen Goods">Frozen Goods</MenuItem>
            </TextField>
            <Box>
              <Button
                color="special"
                sx={{
                  fontSize: "10px",
                  marginTop: "10px",
                  marginLeft: "4px",
                  height: "27px",
                  fontWeight: "100",
                }}
                variant="contained"
                onClick={onAddProduct}
                type="submit"
              >
                Add
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell align="right">Count</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
      </Box>
      <Box>
        {items.map((item) => {
          return (
            <GroceryListItem onGrabList={GrabList} item={item} token={token} />
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "6px",
          backgroundColor: "#FFF8F0",
        }}
      >
        <Button
          color="special"
          sx={{
            height: "32px",
            margin: "2px",
            color: "black",
            fontWeight: "100",
          }}
          variant="contained"
          onClick={saveList}
        >
          Save List
        </Button>
        <Button
          color="special"
          sx={{
            height: "32px",
            margin: "2px",
            color: "black",
            fontWeight: "100",
          }}
          variant="contained"
          onClick={() => navigate(`/go_shopping?id=${listId}`)}
        >
          Start Shopping
        </Button>
      </Box>
    </Container>
  );
};

export default GroceryListDetail;
