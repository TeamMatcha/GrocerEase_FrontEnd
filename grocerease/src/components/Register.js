import { useState } from "react";
import axios from "axios";
import "../register.css";
import {
  Typography,
  Container,
  Box,
  FormControl,
  Button,
  TextField,
} from "@mui/material";
import oranges from "../images/womenShopping.jpg";
import { useNavigate } from "react-router-dom";

export const Register = ({ setAuth, isLoggedIn }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  if (isLoggedIn) {
    navigate("/lists");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://grocerease.herokuapp.com/auth/users/", {
        username: username,
        password: password,
        email: email,
      })
      .then((res) => {
        return axios
          .post("https://grocerease.herokuapp.com/auth/token/login/", {
            username: username,
            password: password,
          })
          .then((data) => {
            console.log(data);
            if (data && data.data.auth_token) {
              setAuth(username, data.data.auth_token);
            }
          });
      });
  };

  const handleChange = (inputType, event) => {
    if (inputType === "username") {
      setUsername(event.target.value);
    }
    if (inputType === "password") {
      setPassword(event.target.value);
    }
    if (inputType === "email") {
      setEmail(event.target.value);
    }
  };

  return (
    <Container
    sx={{
      display: "flex",
      justifyContent: "flex-end",
      flexDirection: "column",
      height: "100vh",
      backgroundColor: "white",
      backgroundImage: `url(${oranges})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    component="div"
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        color: "#FFF8F0",
        flexDirection: "column",
        borderRadius: "25%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginTop: "40px",
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
      <Typography
        sx={{
          fontSize: "20px",
          fontStyle: "italic",
          margin: 0,
          alignItems: "center",
          marginLeft: "50px",
          marginBottom: "0px",
        }}
      >
        Shopping can be a breeze!
      </Typography>
    </Box>
    <Box
      sx={{
        display: "flex-end",
        flexDirection: "column",
        margin: "50px",
        backgroundColor: "#FFFFFF",
        padding: "25px",
        marginTop: "65px",
        color: "#FFF8F0",
        borderRadius: "10%",
        boxShadow: "10",
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <FormControl
        fullWidth
        style={{ marginBottom: "20px", fontWeight: "400px" }}
        className="mt3"
      >
        <TextField
          placeholder="Username"
          variant="filled"
          color="primary"
          type="text"
          id="username"
          onChange={(e) => handleChange("username", e)}
        />
      </FormControl>
      <FormControl
        fullWidth
        style={{ marginBottom: "25px", fontWeight: "800px" }}
      >
        <TextField
          placeholder="Password"
          variant="filled"
          color="primary"
          type="password"
          id="password"
          onChange={(e) => handleChange("password", e)}
        />
      </FormControl>
      <FormControl
        fullWidth
        style={{ marginBottom: "25px", fontWeight: "800px" }}
      >
        <TextField
          placeholder="Email"
          variant="filled"
          color="primary"
          type="email"
          id="email"
          onChange={(e) => handleChange("email", e)}
        />
      </FormControl>

      <FormControl fullWidth>
        <Button
          href="/lists"
          variant="outlined"
          type="submit"
          style={{ color: "#FF8811", borderColor: "#FF8811" }}
        >
          Register
        </Button>
      </FormControl>
    </Box>
  </Container>

  )}