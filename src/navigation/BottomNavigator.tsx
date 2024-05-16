import * as React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import TimelineIcon from "@mui/icons-material/Timeline";

import { useNavigate } from "react-router-dom";

export default function BottomNavigator() {
  const navigate = useNavigate();
  const [bnValue, setBnValue] = useState("Home");

  return (
    <Box sx={{ bottom: 0, position: "sticky", width: "100%" }}>
      <BottomNavigation
        showLabels={true}
        value={bnValue}
        onChange={(event, value) => setBnValue(value)}
        style={{ backgroundColor: "#242525" }}
      >
        <BottomNavigationAction
          label="Home"
          value="Home"
          onClick={() => navigate("/")}
          icon={<WhatshotIcon />}
          style={
            bnValue === "Home" ? { color: "#D15439" } : { color: "#6C6C6D" }
          }
        />
        <BottomNavigationAction
          label="Page1"
          value="Page1"
          onClick={() => navigate("/page1")}
          icon={<FitnessCenterIcon />}
          style={
            bnValue === "Page1" ? { color: "#D15439" } : { color: "#6C6C6D" }
          }
        />
        <BottomNavigationAction
          label="Page2"
          value="Page2"
          onClick={() => navigate("/page2")}
          icon={<FastfoodIcon />}
          style={
            bnValue === "Page2" ? { color: "#D15439" } : { color: "#6C6C6D" }
          }
        />
        <BottomNavigationAction
          label="Page3"
          value="Page3"
          onClick={() => navigate("/page3")}
          icon={<TimelineIcon />}
          style={
            bnValue === "Page3" ? { color: "#D15439" } : { color: "#6C6C6D" }
          }
        />
      </BottomNavigation>
    </Box>
  );
}
