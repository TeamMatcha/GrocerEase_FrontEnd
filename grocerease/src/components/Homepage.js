import { Link } from "react-router-dom";
import "../homepage.css";
import iphoto from "../images/produceBar.png";
import {
  Typography,
  Container,
  Box,
  Button,
  }  from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";


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



       {/* <Typography variant="h6" color="#ffffff" gutterBottom component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "15px",
          height: "100vh",
          padding: "25px",
          marginBottom: "75px",
        
      }}
      >
      Quick, Fast & A Breeze, Shop With GrocerEase
      </Typography>       */}

      <Button variant="contained" href="/login"
      sx={{
         margin: "10px",
         backgroundColor: "#FFF8F0",
         color: "#186bcc", 
        
      }}
      >
      Login
      </Button>
      
      <Button variant="contained" href="/register"
      sx={{
       margin: "10px",
       textAlign: "center", 
       backgroundColor: "#FFF8F0",
       color: "#186bcc",
     }}
     >
      Register
      </Button>
      
      
        
    </Container>    
  );
};

export default Homepage;
