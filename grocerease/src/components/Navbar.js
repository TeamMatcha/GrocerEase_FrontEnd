import "../navbar.css";
import Logout from "./Logout";
import "../navbar.css";
import * as React from "react";
import Container from "@mui/material/Container";

const Navbar = ({ username, token, eraseAuth }) => {
  return (
    <div>
      <Container style={{ backgroundColor: "#EEB61B" }}>
        <div className="logout_button">
          <Logout
            username={username}
            token={token}
            eraseAuth={eraseAuth}
            className="logout_button"
          />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
