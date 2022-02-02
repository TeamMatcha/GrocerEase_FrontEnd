import "../navbar.css";
import Logout from "./Logout";
import "../navbar.css";
import * as React from "react";
import { Typography, Box } from "@mui/material/";
import { useLocation} from "react-router-dom";

const Navbar = ({ username, token, eraseAuth }) => {
  let location = useLocation();
  console.log(location)
  return (
      <Box
        sx={{
          display: "flex",
          color: "black",
          backgroundColor: "#EEB61B",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px",
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
              color: "#FFF8F0",
            }}
          >
            Grocer
          </Typography>
          <Typography
            sx={{
              fontWeight: "100 !important",
              fontSize: "30px",
              fontStyle: "italic",
              color: "#FFF8F0",
            }}
          >
            Ease
          </Typography>
        </Box>
        <div className="logout-container">
          <Logout
          sx={{
            display:"flex",
            justifyContent: "flex-end",
            marginRight: "50px"
          }}
            username={username}
            token={token}
            eraseAuth={eraseAuth}
            className="logout_button"
          />
          </div>

          </Box>

  );
};

export default Navbar;
