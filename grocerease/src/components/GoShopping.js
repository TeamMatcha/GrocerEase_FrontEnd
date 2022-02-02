import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CheckListItem from "./CheckListItem";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import Navbar from "./Navbar";
import confetti from "canvas-confetti";

const GoShopping = ({ token, username, isLoggedIn, eraseAuth }) => {
  const location = useLocation();
  let listId = location.search.split("=")[1];
  const [listName, setListName] = useState("");
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const doneShopping = () => {
    var duration = 5 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);

    setTimeout(() => {
      navigate("/lists");
    }, 5000);
  };

  useEffect(() => {
    axios
      .get(
        `https://grocerease.herokuapp.com/grocerease/list_detail/${listId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        setListName(res.data.name);
      });
    axios
      .get(
        `https://grocerease.herokuapp.com/grocerease/lists/${listId}/items/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
        }
      )
      .then((res) => {
        setItems(res.data);
      });
  }, []);
  return (
    <>
      {isLoggedIn && (
        <Navbar username={username} token={token} eraseAuth={eraseAuth} />
      )}
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#FFF8F0",
        padding: "16px",
        minHeight: "95vh",
        width: "100%",
      }}
      component="div"
      >
      <Box
        sx={{
          maxHeight: "95vh",
          display: "flex",
          flexDirection: "column",
          maxWidth: "350px",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <Box
              sx={{
                backgroundColor: "#FFF8F0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "16px",
              }}
            >
              <TextField
                disabled
                id="outlined-basic"
                label="List Name"
                variant="outlined"
                color="primary"
                value={listName}
                onChange={(event) => setListName(event.target.value)}
                component="div"
                sx={{
                  borderRadius: "5px",
                  width: "320px",
                  height: "32px",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
            }}
          >
            <Box>
              <Typography
                sx={{
                  minWidth: "48px",
                }}
              ></Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                sx={{
                  minWidth: "100px",
                }}
              >
                Product
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  minWidth: "32px",
                  pr: 1.5,
                }}
              >
                Count
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  pl: 1,
                  minWidth: "120px",
                }}
              >
                Category
              </Typography>
            </Box>
            <Box>
              <Typography sx={{}}></Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ overflowY: "scroll", height: "100%" }}>
          {items.map((item) => {
            return <CheckListItem item={item} />;
          })}
        </Box>
        <Box
          sx={{
            mt: 1.5,
          }}
        >
          <Button
            // color="special"
            variant="contained"
            onClick={doneShopping}
            sx={{
              height: "32px",
              margin: "2px",
              mx: "auto",
              background: "#EEB61B",
              border: " 1px solid #EEB61B",
              color: "#FFF8F0",
              fontWeight: "100",
            }}
          >
            Done Shopping
          </Button>
        </Box>
      </Box>
    </Container>
    </>
  );
};

export default GoShopping;
