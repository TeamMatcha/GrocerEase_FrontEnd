import Navbar from "./Navbar";
import CreateListForm from "./CreateListForm";
import SavedGroceryList from "./SavedGroceryList";
import { Container, Box } from "@mui/material";

const Mainpage = ({ eraseAuth, token, username }) => {
  return (
    <>
      <Container style={{ backgroundColor: "#EEB61B" }}>
      <Box
              sx={{
          display: "flex",
          padding: "15px",
          
          
        }}
        >
      </Box>
      </Container>

      
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
