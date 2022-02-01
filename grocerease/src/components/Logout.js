import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../navbar.css";
import { Container, Typography } from "@mui/material";

const Logout = ({ username, token, eraseAuth }) => {
  const navigate = useNavigate();
  const onClick = () => {
    console.log("here");
    axios
      .post(
        "https://grocerease.herokuapp.com/auth/token/logout/",
        {},
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      )
      .then(() => {
        eraseAuth();
      });
    navigate("/login");
  };

  return (
    <Container  style={{ backgroundColor: "#FFF8F0" , padding: "15px", fullWidth: "auto" , color: "black" }}
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    onClick={onClick}>
    <Typography
    >

      <i
        // class="f4 fw6 db dark-blue no-underline underline-hover logout_button"
        href="#0"
      >
        Logout
      </i>
      </Typography>

    </Container>
  );
};

export default Logout;
