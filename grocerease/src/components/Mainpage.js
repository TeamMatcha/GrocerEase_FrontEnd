import Navbar from "./Navbar";
import CreateListForm from "./CreateListForm";
import SavedGroceryList from "./SavedGroceryList";
import { Container, Box } from "@mui/material";

const Mainpage = ({ eraseAuth, token, username }) => {
  return (
    <>

      
      <div>
      
        <Navbar eraseAuth={eraseAuth} token={token} username={username} />
      </div>
      <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#FFF8F0",
        padding: "16px",
        marginTop: "0px",
        height: "95vh"
      }}
      component="div"
    >
        <CreateListForm token={token} />
        <SavedGroceryList token={token} />
      </Container>
    </>
  );
};

export default Mainpage;
