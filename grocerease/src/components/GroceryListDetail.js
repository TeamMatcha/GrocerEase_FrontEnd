import axios from "axios";
import { useEffect, useState } from "react";
import "../groceryListDetail.css";
import GroceryListItem from "./GroceryListItem";
import { useLocation, useNavigate } from "react-router-dom";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Container,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Box,
  FormControl,
  rgbToHex,
} from "@mui/material";
import pattern from "../pattern_hexagon.png";
import produceBar from "../images/produceBar.png";

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
        backgroundSize: "cover",
        backgroundPosition: "center",
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
            sx={{
              width: "364px",
              height: "32px",
              color: "black",
              borderColor: "black",
              ".MuiOutlinedInput-notchedOutline": { outlineColor: "#000" },
            }}
            onChange={(event) => setListName(event.target.value)}
            value={listName}
            component="div"
          />
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <TextField
                sx={{
                  marginTop: "5px",
                  width: "295px",
                  height: "32px",
                  color: "black",
                  borderColor: "black",
                }}
                id="outlined-basic"
                variant="outlined"
                value={value}
                placeholder="Add products"
                onChange={(event) => setValue(event.target.value)}
              ></TextField>
            </Box>
            <Box>
              <Button
                color="special"
                sx={{
                  fontSize: "10px",
                  marginTop: "6px",
                  marginLeft: "4px",
                }}
                variant="contained"
                onClick={onAddProduct}
                type="submit"
              >
                Add
              </Button>
            </Box>
          </Box>

          <Box>
            <TextField
              sx={{
                "& .MuiSelect-select": { padding: "3px 10px" },
                marginTop: "10px",
                "& label": { background: "#FFF8F0", px: 1, py: 0 },
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
            </TextField>
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
                margin: "2px",
                color: "black",
              }}
              variant="contained"
              onClick={saveList}
            >
              Save List
            </Button>
            <Button
              color="special"
              sx={{
                margin: "2px",
                color: "black",
              }}
              variant="contained"
              onClick={() => navigate(`/go_shopping?id=${listId}`)}
            >
              Start Shopping
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        {items.map((item) => {
          return (
            <GroceryListItem onGrabList={GrabList} item={item} token={token} />
          );
        })}
      </Box>
    </Container>
  );
};

export default GroceryListDetail;
