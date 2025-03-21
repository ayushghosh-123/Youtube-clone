// import React from 'react'
import { useState } from "react";
import { Stack } from "@mui/material";
import { Categories } from "../Utils/Constant";

const Sidebar = ({selectedCategory, setSelectedCategory}) => {

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { xs: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {Categories.map((category, index) => (
        <button
          key={index}
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)} // Update state on click
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "12px 15px",
            border: "none",
            cursor: "pointer",
            width: "100%",
            borderRadius: "20px",
            background: category.name === selectedCategory ? "#FC1503" : "transparent",
            color: category.name === selectedCategory ? "#fff" : "#b8b8b8",
            transition: "all 0.3s ease",
          }}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;

