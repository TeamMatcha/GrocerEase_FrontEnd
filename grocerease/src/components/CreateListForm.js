import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../createListForm.css";
import * as React from "react";
import { Container, Box, Button, TextField } from "@mui/material";

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
<Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <TextField
            sx={{
              "& .MuiSelect-select": { padding: "3px 10px" },
              marginTop: "15px",
              "& label": { background: "#FFF8F0", px: 1, py: 0 },
              width: "297px",
              height: "32px",
              marginRight: "10px",
            }}
            select
            label="Sort By"
            labelWidth={250}
            variant="outlined"
            value="Date"
            id="outlined-basic"
            label="List Name"
            variant="outlined"
            color="primary"
            type="text"
            placeholder="List's Name"
            onChange={(event) => handleChange("name", event)}
            component="div"
          />

          <Button
            color="special"
            sx={{
              fontSize: "10px",
              height: "29px",
              fontWeight: "100",
              color: "#FFF8F0",
              marginTop: "15px"
            }}
            variant="contained"
            onClick={handleSubmit}
            type="submit"
          >
            Create
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CreateListForm;
