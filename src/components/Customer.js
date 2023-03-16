import React, { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { IconButton, TableCell, TableRow } from "@mui/material";
import Items from "./Items";

const Customer = ({ user }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell align="left">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="left">
          {user.customer.name}
        </TableCell>
        <TableCell align="center">${user.spent}</TableCell>
        <TableCell align="center">{user.points}</TableCell>
      </TableRow>
      <TableRow>
        <Items user={user} open={open} />
      </TableRow>
    </>
  );
};

export default Customer;
