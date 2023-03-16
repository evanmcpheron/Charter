import {
  Box,
  Collapse,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Items = ({ user, open }) => {
  return (
    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box sx={{ margin: 1 }}>
          <Typography variant="h6" gutterBottom component="div">
            Individual Items
          </Typography>
          <Table size="small" aria-label="purchases">
            <TableHead>
              <TableRow>
                <TableCell align={"center"}>Date</TableCell>
                <TableCell align={"center"}>Item</TableCell>
                <TableCell align={"center"}>Price</TableCell>
                <TableCell align={"center"}>Points</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.items.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell component="th" scope="row" align={"center"}>
                    {item.purchaseDate}
                  </TableCell>
                  <TableCell align={"center"}>{item.item}</TableCell>
                  <TableCell align={"center"}>${item.price}</TableCell>
                  <TableCell align={"center"}>{item.points}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Collapse>
    </TableCell>
  );
};

export default Items;
