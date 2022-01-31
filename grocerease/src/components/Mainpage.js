import Navbar from "./Navbar";
import CreateListForm from "./CreateListForm";
import SavedGroceryList from "./SavedGroceryList";
// import { Typography, Container, Box } from "@mui/material";

const Mainpage = ({ eraseAuth, token, username }) => {
  return (
    <>
    {/* this is the top header of the app */}
      {/* <Container style={{ backgroundColor: "#EEB61B" }}>
      <Box
              sx={{
          display: "flex",
          padding: "15px",
          
        }}
        >
      </Box>
      </Container> */}

      
      <div>
      
        <Navbar eraseAuth={eraseAuth} token={token} username={username} />
      </div>

      <div>
        <CreateListForm token={token} />
      </div>
      <div>
        <SavedGroceryList token={token} />
      </div>
    </>
  );
};

export default Mainpage;
