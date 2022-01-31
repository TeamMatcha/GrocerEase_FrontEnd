import { Card, Box, Typography, Checkbox } from "@mui/material";
import pattern from "../pattern_hexagon.png";

const CheckListItem = ({ item }) => {
  console.log(item);
  return (
    <Box>
      <Card
        sx={{
          backgroundColor: "#EEB61B",
          width: "364px",
          margin: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${pattern})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            height: "36px",
          }}
        >
          <Checkbox
            sx={{
              borderRadius: "5px",
            }}
            type="checkbox"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            height: "56px",
          }}
        >
          <Typography
            sx={{
              fontSize: "24px",
            }}
          >
            {item.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
            }}
          >
            {item.item_quantity}
          </Typography>
          <Typography
            sx={{
              margin: "8px",
              fontSize: "24px",
            }}
          >
            ct.
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
            }}
          >
            {item.choices}
          </Typography>
        </Box>
      </Card>
    </Box>
  );
};

export default CheckListItem;
