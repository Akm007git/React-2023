import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import zIndex from "@mui/material/styles/zIndex";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      justifyContent: "space-between",top:0,
      backgroundColor: "#000",
    }}
  >
    <Link to="/" style={{ display: "flex",   alignItems: "center", zIndex:1, position:"sticky"}}>
      <img src={logo} alt="logo" height={80} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
