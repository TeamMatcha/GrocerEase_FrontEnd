import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../navbar.css";
import { Container, Typography , Button } from "@mui/material";

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
    <Container  
      sx={{
        display: "flex",
        justifyContent: "space-between",
        color: "#EEB61B",
        alignContent: "space-evenly",
  
      }}
    onClick={onClick}>
    <Button
    color="invertSpecial"
    sx={{
                fontSize: "10px",
                height: "29px",
                fontWeight: "200",
                color: "#EEB61B",
              }}
              variant="contained"
              href="#0"
    >

        Logout

      </Button>

    </Container>
  );
};

export default Logout;
