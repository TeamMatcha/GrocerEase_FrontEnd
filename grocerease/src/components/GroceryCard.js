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
} from "@mui/material";
import pattern1 from "../images/pattern1.png";

export const GroceryCard = ({ name, date_created, tags, listId, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div>
    <Card  style={{ marginTop: "15px", marginBottom: "5px", marginLeft: "20px", marginRight: "45px",  width: "70", height: "95px" ,  }}
>
<div>
      <CardMedia 
        image={pattern1}
        component="img"
        style={{ height: "40px",}}

        
      />
      </div>
      <CardContent style={{ backgroundColor: "#FFF8F0" }}>
        <Typography
          style={{ backgroundColor:"#FFF8F0", height: "50px" }}
          gutterBottom
          variant="h5"
          component="div"
          color="#EEB61B"
          fontWeight= "bold"
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
      

      <CardActions style={{ backgroundColor: "#EEB61B" }}>
        <Button
        
          style={{ color: "#FFF8F0" }}
          size="small"
          onClick={() => {
            navigate(`/create_list_detail?id=${listId}`);
          }}
        >
          Details
          {/* <i class="fas fa-search"></i> */}
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
          {/* <i class="fas fa-trash"></i> */}
        </Button>
      </CardActions>
      </CardContent>

    </Card>
    </div>
  );
};
