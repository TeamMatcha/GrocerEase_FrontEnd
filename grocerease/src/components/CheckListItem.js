import * as React from "react";
import { Card, Box, Typography, Checkbox, Input } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const CheckListItem = ({ item }) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <Box
      key={item.name}
      sx={{
        display: "flex",
        color: "#FFF8F0",
        padding: 0,
        "& > *": { border: "1px solid black", px: 2, background: "#EEB61B" },
        "& *": { m: 0, py: "3px", color: "#FFF8F0" },
        "&:after": {
          content: '""',
          height: "2px",
          position: "absolute",
          background: checked ? "white" : "transparent",
          width: "24rem",
          ml: "1rem",
          mt: "1.3rem",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={checked}
          onChange={() => setChecked((x) => !x)}
          sx={{ m: 0, p: 0 }}
        />
      </Box>
      <Box
        sx={{ width: "8rem", display: "flex", alignItems: "center" }}
        scope="row"
      >
        {item.name}
      </Box>
      <Box sx={{ width: "4rem", display: "flex", alignItems: "center" }}>
        {item.item_quantity}
      </Box>
      <Box sx={{ width: "10rem", display: "flex", alignItems: "center" }}>
        {item.choices}
      </Box>
    </Box>
  );
};

export default CheckListItem;
