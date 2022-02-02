import { useNavigate } from "react-router-dom";
import moment from "moment";
import "../groceryCard.css";
import {
  Card,
  CardMedia,
  CardActions,
  Button,
  CardContent,
  Typography,
  Box
} from "@mui/material";
import pattern1 from "../images/pattern1.png";

export const GroceryCard = ({ name, date_created, tags, listId, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Card
        style={{
          marginTop: "15px",
          marginBottom: "5px",
          marginLeft: "50px",
          marginRight: "45px",
          width: "70",
          // height: "95px",
        }}
      >
        <div>
          <CardMedia
            image={pattern1}
            component="img"
            style={{ height: "40px" }}
          />
        </div>
        <CardContent style={{ backgroundColor: "#EEB61B" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="#FFF8F0"
          >
            {name}
          </Typography>
          <Box
          sx={{
            display: "flex",
            color: "#FFF8F0",
          }}>
          <i
              style={{ marginRight: "5px" }}
              class="fa fa-calendar"
              aria-hidden="true"
            ></i>
          <Typography variant="body1" >
            {moment(date_created).format("MMMM Do YYYY")}
          </Typography>
          </Box>
          <CardActions>
            <Button
              color="invertSpecial"
              sx={{
                fontSize: "10px",
                height: "29px",
                fontWeight: "200",
                color: "#EEB61B",
                marginTop: "15px",
              }}
              variant="contained"
              onClick={() => {
                navigate(`/create_list_detail?id=${listId}`);
              }}
            >
              Details
              {/* <i class="fas fa-search"></i> */}
            </Button>
            <Button
              color="invertSpecial"
              sx={{
                fontSize: "10px",
                height: "29px",
                fontWeight: "200",
                color: "#EEB61B",
                marginTop: "15px",
              }}
              variant="contained"
              onClick={(event) => {
                event.preventDefault();
                onDelete(listId);
              }}
            >
              Delete
              {/* <i class="fas fa-trash"></i> */}
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </div>
  );
};
