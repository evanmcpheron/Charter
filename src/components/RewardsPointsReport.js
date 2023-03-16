import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from "@mui/material";
import { allUsers } from "../api/api";
import { customerTotals } from "../utils/customerTotals";
import Customer from "./Customer";

const RewardsPointsReport = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    allUsers()
      .then((res) => {
        const usersSortedByDate = res.sort(
          (a, b) => a.purchaseDate < b.purchaseDate
        );

        const { lastThreeMonths } = customerTotals(usersSortedByDate);
        setUsers(lastThreeMonths);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return loading ? (
    <Box className={"loader"}>
      <CircularProgress />
    </Box>
  ) : (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="left">Name</TableCell>
            <TableCell align="center">Total Spent</TableCell>
            <TableCell align="center">Total Points</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, idx) => (
            <Customer key={idx} user={user} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RewardsPointsReport;
