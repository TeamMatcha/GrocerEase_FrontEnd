import "../homepage.css";
import iphoto from "../images/produceBar.png";
import { Typography, Container, Box, Button } from "@mui/material";

const Homepage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#EEB61B",
        backgroundImage: `url(${iphoto})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      component="div"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "center",
          padding: "15px",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            margin: "0px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Libre Franklin",
              fontWeight: 900,
              fontSize: "65px",
              color: "#FFF8F0",
            }}
          >
            Grocer
          </Typography>
          <Typography
            sx={{
              fontWeight: "100 !important",
              fontSize: "65px",
              fontStyle: "italic",
              color: "#FFF8F0",
            }}
          >
            Ease
          </Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "25px",
            fontStyle: "italic",
            margin: 0,
            color: "#FFF8F0",
            fontWeight: "200px",
          }}
        >
          Shopping can be a breeze!
        </Typography>
      </Box>

      <Button
        variant="contained"
        href="/login"
        sx={{
          margin: "10px",
          backgroundColor: "#FFF8F0",
          color: "black",
        }}
      >
        Login
      </Button>

      <Button
        variant="contained"
        href="/register"
        sx={{
          margin: "10px",
          textAlign: "center",
          backgroundColor: "#FFF8F0",
          color: "black",
        }}
      >
        Register
      </Button>
    </Container>
  );
};

export default Homepage;
