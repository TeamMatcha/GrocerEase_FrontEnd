import "../homepage.css";
import iphoto from "../images/produceBar.png";
import {
  Typography,
  Container,
  Box,
  Button,
  }  from "@mui/material";



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
          justifyContent: "center",
          color: "#FFF8F0",
          flexDirection: "column",
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
          }}
        >
          shop quick, easy, and in a breeze!
        </Typography>
      </Box>

      <Button variant="contained" href="/login"
      sx={{
         margin: "10px",
         backgroundColor: "#FFF8F0",
         color: "black", 
        
      }}
      >
      Login
      </Button>
      
      <Button variant="contained" href="/register"
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
