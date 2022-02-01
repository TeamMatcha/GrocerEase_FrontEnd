import axios from "axios";
import { useState, useEffect } from "react";
import { GroceryCard } from "./GroceryCard";
import _ from "lodash";
import "../groceryCard.css";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

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

  const SortList = (event) => {
    console.log(event.target.value);
    const sorted_lists = _.orderBy(
      lists,
      [event.target.value],
      [event.target.value === "date_created" && "desc"]
    );
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
      <CssBaseline />

      <Container style={{ backgroundColor: "#FFF8F0" }}>
        <div>
          <div className="search-filter" size="medium" padding="50px">
            <div>
              <label>Sort By:</label>
              <select onChange={SortList} className="sort-by" >
                <option value="date_created">Date</option>
                <option value="name">Name</option>
              </select>
            </div>
          </div>
          {lists &&
            lists.map((list) => {
              console.log(list);
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

        </div>
      </Container>
    </React.Fragment>
  );
};

export default SavedGroceryList;
