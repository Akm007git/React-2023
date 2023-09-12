import React from "react";
import { Button, Stack } from "@mui/material";
import { categories } from "../utils/constants.js";

//const selectCategory = "New";
const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack
    direction="row"
    overflow="auto"
    sx={{
     
      height: { sx: "auto", md: "90vh" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <Button
        class="category-btn"
        onClick={() => setSelectedCategory(category.name)}
        style={{
          background: category.name === selectedCategory && "#ff0000",
          color: "white",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectedCategory ? "white" : "#ff0000",
            marginRight: "5px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{ opacity: category.name === selectedCategory ? "1" : "0.7" }}
        >
          {category.name}
        </span>
      </Button>
    ))}
  </Stack>
);

export default Sidebar;
