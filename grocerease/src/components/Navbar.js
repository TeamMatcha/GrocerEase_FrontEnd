import "../navbar.css";
import Logout from "./Logout";
import "../navbar.css";
import * as React from "react";
import {Container, Typography, Box }from "@mui/material/";

const Navbar = ({ username, token, eraseAuth }) => {
  return (
      <Container
      component="div"
      
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          color: "black",
          flexDirection: "column",
          backgroundColor: "#FFF8F0"
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Libre Franklin",
              fontWeight: 900,
              fontSize: "30px",
            }}
          >
            Grocer
          </Typography>
          <Typography
            sx={{
              fontWeight: "100 !important",
              fontSize: "30px",
              fontStyle: "italic",
            }}
          >
            Ease
          </Typography>
        </Box>


          <Logout
            username={username}
            token={token}
            eraseAuth={eraseAuth}
            className="logout_button"
            display="inline-block"
          />
          </Box>
          

      </Container>
  );
};

export default Navbar;
