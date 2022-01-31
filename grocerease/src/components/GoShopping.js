import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CheckListItem from "./CheckListItem";
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
const GoShopping = ({ token }) => {
  const location = useLocation();
  let listId = location.search.split("=")[1];
  const [listName, setListName] = useState("");
  const [items, setItems] = useState([]);
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
        const newItems = [...items, ...res.data];
        setItems(newItems);
      });
  }, []);
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "32px",
          fontWeight: "900",
        }}
      >
        {listName}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {items.map((item) => {
          return <CheckListItem item={item} />;
        })}
      </Box>
      <div>
        <Button
          sx={{
            margin: "2px",
            color: "black",
            borderColor: "black",
          }}
          variant="outlined"
          onClick={() => {
            navigate("/lists");
          }}
        >
          Done Shopping
        </Button>
      </div>
    </Container>
  );
};

export default GoShopping;
