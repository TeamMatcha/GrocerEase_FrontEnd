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
  Box,
} from "@mui/material";
import pattern from "../pattern_hexagon.png";
import { flexbox } from "@mui/system";

export const GroceryCard = ({ name, date_created, tags, listId, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div>
    <Card style={{ marginTop: "35px", marginBottom: "25px", width: "60%", }}>
      <CardMedia
        image={pattern}
        height="14"
        component="img"
        style={{ height: "14px" }}
        
      />
      <CardContent style={{ backgroundColor: "#EEB61B" }}>
        <Typography
          style={{ backgroundColor: "#EEB61B" }}
          gutterBottom
          variant="h5"
          component="div"
          color="#FFF8F0"
        >
          {name}
        </Typography>

        <Typography variant="body1" color="#FFF8F0">
          <i
            style={{ marginRight: "5px" }}
            class="fa fa-calendar"
            aria-hidden="true"
          ></i>
          {moment(date_created).format("MMMM Do YYYY")}
        </Typography>
      </CardContent>

      <CardActions style={{ backgroundColor: "#EEB61B" }}>
        <Button
          style={{ color: "#FFF8F0" }}
          size="small"
          onClick={() => {
            navigate(`/create_list_detail?id=${listId}`);
          }}
        >
          Details
        </Button>
        <Button
          style={{ color: "#FFF8F0" }}
          size="small"
          onClick={(event) => {
            event.preventDefault();
            onDelete(listId);
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
    </div>
  );
};
