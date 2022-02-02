import axios from "axios";
import { useState, useEffect } from "react";
import { GroceryCard } from "./GroceryCard";
import _ from "lodash";
import "../groceryCard.css";
import * as React from "react";
import { Container, Box, TextField, MenuItem, Typography } from "@mui/material";
import image from '../images/empty-state-grocery-list.png';
const SavedGroceryList = ({ token }) => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    axios
      .get("https://grocerease.herokuapp.com/grocerease/lists/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `token ${token}`,
        },
      })
      .then((res) => {
        let saved_lists_from_server = res.data;
        const sorted_lists = _.orderBy(
          saved_lists_from_server,
          ["date_created"],
          ["desc"]
        );
        console.log({ sorted_lists });
        setLists(sorted_lists);
      })
      .catch((error) => console.log(error));
  }, [token, setLists]);

  const sortList = (event) => {
    const sorted_lists = _.orderBy(
      lists,
      [event.target.value],
      // if the event.target.value = the date_created set descinding order
      [event.target.value === "date_created" && "desc"]
    );
    console.log(event)
    console.log({ sorted_lists });
    setLists(sorted_lists);
  };
  const DeleteList = (listId) => {
    axios
      .delete(
        `https://grocerease.herokuapp.com/grocerease/delete_list/${listId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        setLists(lists.filter((list) => list.pk !== listId));
      });
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
          <TextField
            sx={{
              "& .MuiSelect-select": { padding: "3px 10px" },
              marginTop: "15px",
              "& label": { background: "#FFF8F0", px: 1, py: 0 },
              width: "375px",
              height: "35px",
            }}
            select
            label="Sort By"
            labelWidth={250}
            variant="outlined"
            onChange={sortList}
            value="date_created"
          >
            <MenuItem value="date_created">Date</MenuItem>
            <MenuItem value="name">List Name</MenuItem>
          </TextField>
        {lists && lists.length <= 0 ?
          <Box style={{ textAlign: 'center' }}>
            <Box
              component="img"
              sx={{
                height: 250,
              }}
              alt="The house from the offer."
              src={image}
            />
            <Typography>
              Whoops, looks like there's no saved lists!
            </Typography>
          </Box> :
        lists.map((list) => {
          return (
            <GroceryCard
              name={list.name}
              date_created={list.date_created}
              tags={list.tags}
              listId={list.pk}
              onDelete={DeleteList}
            />
          );
        })}

        </Box>
    </React.Fragment>
  );
};

export default SavedGroceryList;
