import "../navbar.css";
import Logout from "./Logout";
import "../navbar.css";
import * as React from "react";
import {Container, Typography, Box, textAlign }from "@mui/material/";

const Navbar = ({ username, token, eraseAuth }) => {
  return (
      <Container fixed style={{ backgroundColor: "#FFF8F0" }}>
      <Typography 
              sx={{
              fontFamily: "Libre Franklin",
              fontWeight: 90,
              fontSize: "30px",

            }}
            component="div">
      <Box 
      textAlign="right" m={1}
      >


          <Logout
            username={username}
            token={token}
            eraseAuth={eraseAuth}
            className="logout_button"
          />
          </Box>
          
          </Typography>

      </Container>
  );
};

export default Navbar;
