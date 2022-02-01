import { useState } from "react";
import axios from "axios";
import "../register.css";
import {
  Typography,
  Container,
  Box,
  FormControl,
  Button,
  TextField,
} from "@mui/material";
import oranges from "../images/womenShopping.jpg";
import { useNavigate } from "react-router-dom";

export const Register = ({ setAuth, isLoggedIn }) => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate()
  if (isLoggedIn) {
    navigate("/lists");
  }  

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://grocerease.herokuapp.com/auth/users/", {
        username: username,
        password: password,
        email: email
      })
      .then((res) => {
        console.log(res);
        return axios
          .post("https://grocerease.herokuapp.com/auth/token/login/", {
            username: username,
            password: password,
          })
          .then((data) => {
            if (data && data.data.auth_token) {
              setAuth(username, data.data.auth_token);
            } 
          });
      });
  };

  const handleChange = (inputType, event) => {
    if (inputType === "username") {
      setUsername(event.target.value);
    }
    if (inputType === "password") {
      setPassword(event.target.value);
    }
    if (inputType === "email") {
      setEmail(event.target.value);
    }
  };

  return (

<Container
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#EEB61B",
        backgroundImage: `url(${oranges})`,
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "15px",
          backgroundColor: "#FFF8F0",
          padding: "25px",
          marginBottom: "75px",
          color: "#FFF8F0",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <FormControl fullWidth style={{ marginBottom: "25px" }} className="mt3">
          <TextField
            placeholder="Username"
            variant="filled"
            color="primary"
            type="text"
            id="email"
            onChange={(e) => handleChange("username", e)}
          />
        </FormControl>
        <FormControl style={{ marginBottom: "25px" }} fullWidth>
          <TextField
            placeholder="Password"
            variant="filled"
            color="primary"
            type="password"
            id="email"
            onChange={(e) => handleChange("password", e)}
          />
        </FormControl>
        
        <FormControl fullWidth style={{ marginBottom: "20px" }} className="mt3">
          <TextField
            placeholder="Email"
            variant="filled"
            color="primary"
            type="text"
            id="email"
            onChange={(e) => handleChange("email", e)}
          />
          </FormControl>
        <FormControl fullWidth>
          <Button variant="outlined" type="submit">
            Register
          </Button>
        </FormControl>
      </Box>
    </Container>
  );
}


//     <div className="register_container">
//       <form onSubmit={handleSubmit}>
//         <div className="mt3">
//           <label className="db fw4 lh-copy f6 register_label">Username:</label>
//           <input
//             className="pa2 input-reset ba bg-transparent w-100 measure register_input"
//             type="text"
//             placeholder="JohnSmith88"
//             value={username}
//             onChange={(e) => handleChange("username", e)}
//           />
//         </div>
//         <div className="mt3">
//           <label className="db fw4 lh-copy f6 register_label">Password:</label>
//           <input
//             className="pa2 input-reset ba bg-transparent w-100 measure register_input"
//             placeholder="password"
//             type="password"
//             value={password}
//             onChange={(e) => handleChange("password", e)}
//           />
//         </div>
//         <div className="mt3">
//           <label className="db fw4 lh-copy f6 register_label">Email:</label>
//           <input
//             className="pa2 input-reset ba bg-transparent w-100 measure register_input"
//             type="text"
//             placeholder="JohnSmith@gmail.com"
//             value={email}
//             onChange={(e) => handleChange("email", e)}
//           />
//         </div>
//         <div className="mt3">
//           <button
//             className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 register_button"
//             type="submit"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
//
      
