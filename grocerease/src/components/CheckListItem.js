import {
  Container,
  Card,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Box,
  FormControl,
  rgbToHex,
  Typography,
} from "@mui/material";

const CheckListItem = ({ item }) => {
  console.log(item);
  return (
    <Box>
      <Card
        sx={{
          backgroundColor: "#EEB61B",
          width: "364px",
          margin: "2px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box>
          <input type="checkbox" />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
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
