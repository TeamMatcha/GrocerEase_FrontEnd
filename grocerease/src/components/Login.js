import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../login.css";
import hero from "../images/login-hero.png";
import {
  Typography,
  Container,
  Box,
  FormControl,
  Button,
  TextField,
} from "@mui/material";

export default function Login({ isLoggedIn, setAuth }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  if (isLoggedIn) {
    navigate("/lists");
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://grocerease.herokuapp.com/auth/token/login/", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.auth_token) {
          setAuth(username, res.data.auth_token);
        }
      });
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "white",
        backgroundImage: `url(${hero})`,
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
          borderRadius: "30px",
          alignItems: 'center',
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
            // marginLeft: "50px",
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
            id="email"
            onChange={(event) => setUsername(event.target.value)}
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
            id="email"
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>
        <FormControl fullWidth>
          <Button
            variant="outlined"
            type="submit"
            style={{ color: "#FF8811", borderColor: "#FF8811", marginBottom: "10px" }}
          >
            Login
          </Button>
          <Button
            href="/register"
            variant="outlined"
            type="submit"
            style={{ color: "#FF8811", borderColor: "#FF8811" }}
          >
            Register
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}
