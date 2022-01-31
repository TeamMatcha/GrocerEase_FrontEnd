import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../createListForm.css";
import * as React from "react";
import {CssBaseline, Container, Button, Box, Typography }from "@mui/material/";

const CreateListForm = ({ token }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://grocerease.herokuapp.com/grocerease/lists/",
        {
          name: name,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        navigate(`/create_list_detail?id=${res.data.pk}`);
      });
  };

  const handleChange = (inputType, event) => {
    if (inputType === "name") {
      setName(event.target.value);
    }
  };

  return (
      <React.Fragment>
        <CssBaseline />
        <Container style={{backgroundColor: "#FFF8F0"}}>
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Libre Franklin",
              fontWeight: 900,
              fontSize: "60px",
            }}
          >
            Grocer
          </Typography>
          <Typography
            sx={{
              fontWeight: "100 !important",
              fontSize: "60px",
              fontStyle: "italic",
            }}
          >
            Ease
          </Typography>
        </Box>
        </Container>

        <Container fixed style={{ backgroundColor: "#FFF8F0" }}>
          <div>
            <form onSubmit={handleSubmit}>
              <label>List Name:</label>
              <input
                className="createListInput"
                type="text"
                placeholder="List's Name"
                value={name}
                onChange={(event) => handleChange("name", event)}
              />
            </form>
          </div>
          <div>
            <Button size="medium" onClick={handleSubmit}>
              {" "}
              Create New List{" "}
            </Button>
          </div>
        </Container>
      </React.Fragment>
  );
};

export default CreateListForm;
