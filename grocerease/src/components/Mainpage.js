import Navbar from "./Navbar";
import CreateListForm from "./CreateListForm";
import SavedGroceryList from "./SavedGroceryList";
import { Typography, Container } from "@mui/material";

const Mainpage = ({ eraseAuth, token, username }) => {
  return (
    <>
      <Container style={{ backgroundColor: "#EEB61B" }}>
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
