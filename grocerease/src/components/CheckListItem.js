import { Card, Box, Typography, Checkbox } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const CheckListItem = ({ item }) => {
  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table" sx={{ minWidth: "225px" }}>
        <TableBody>
          <TableRow
            key={item.name}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell>
              <Checkbox
                sx={{
                  borderRadius: "5px",
                }}
                type="checkbox"
              />
            </TableCell>
            <TableCell
              sx={{
                fontSize: "24px",
              }}
            >
              {item.name}
            </TableCell>
            <TableCell
              sx={{
                fontSize: "24px",
              }}
            >
              {item.item_quantity}
            </TableCell>
            <TableCell
              sx={{
                margin: "8px",
                fontSize: "24px",
              }}
            >
              ct.
            </TableCell>
            <TableCell
              sx={{
                fontSize: "24px",
              }}
            >
              {item.choices}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CheckListItem;
