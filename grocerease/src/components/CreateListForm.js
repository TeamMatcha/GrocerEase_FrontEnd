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

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          // height: '45px'
        }}
      >

        <TextField
          labelWidth={150}
          id="outlined-basic"
          label="List Name"
          variant="outlined"
          color="primary"
          value={name}
          placeholder="List's Name"
          onChange={(event) => handleChange(event)}
          sx={{
            marginTop: "15px",
            "& label": { background: "#FFF8F0", px: 1, py: -4 },
            width: "285px",
            marginRight: '15px'
          }}
          InputLabelProps={{
            shrink: 'shrink',
          }}
        />
        <Button
          color="special"
          sx={{
            fontSize: "10px",
            fontWeight: "100",
            color: "#FFF8F0",
            marginTop: "15px",
            // height: '30px'
          }}
          variant="contained"
          onClick={handleSubmit}
          type="submit"
        >
          Create
        </Button>
      </Box>
    </React.Fragment>
  );
};

export default CreateListForm;