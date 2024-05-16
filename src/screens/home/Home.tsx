import { LinearProgress, Checkbox } from "@mui/material";

import { SwipeableButton } from "react-swipeable-button";

import React, { useState, useCallback, useEffect } from "react";
import Goal from "./../../assets/goal.jsx";

import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

import heart from "./../../assets/heart.json";
import Lottie from "lottie-react";
import BarGraph from "../../components/BarGraph";

function Home() {
  // const [completerGoals, setCompleterGoals] = useState(0);
  // const [workout, setWorkout] = useState(false);
  // const [read, setRead] = useState(false);
  // const [walk, setWalk] = useState(false);
  // const [sleep, setSleep] = useState(false);
  // const [water, setWater] = useState(false);

  const [tasks, setTasks] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const handleTaskChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const idx = tasks.indexOf(event.target.value);
      if (idx === -1) {
        setTasks([...tasks, event.target.value]);
      } else {
        setTasks(tasks.filter((task) => task !== event.target.value));
      }
    },
    [tasks]
  );

  useEffect(() => {
    setProgress((tasks.length / 5) * 100);
  }, [tasks]);

  const onSuccess = () => {
    setTasks(["workout", "read", "walk", "sleep", "water"]);
  };

  return (
    <div className="w-screen" style={{ backgroundColor: "#202121" }}>
      {/* Top Section */}
      <div
        className="h-28 m-8 rounded-xl flex flex-row justify-evenly"
        style={{
          background: "linear-gradient(90deg, #79A5CE, #217FD6)",
        }}
      >
        <div className="flex items-center">
          <Goal />
        </div>
        <div className="w-8/12 flex-shrink-0 p-4">
          <h1 className="text-white text-lg font-bold">
            Your Daily Goal Almost Done
          </h1>
          <h1 className="text-white text-sm text-opacity-80 mb-2">
            {tasks.length} of 5 tasks completed
          </h1>
          <LinearProgress variant="determinate" value={progress} />
          <h1 className="text-white text-sm float-end p-2">
            {tasks.length * 20}%
          </h1>
        </div>
      </div>

      {/* Heading & Animation */}
      <div className="mx-8 justify-between flex items-center">
        <h1 className="text-2xl text-white font-bold">Today's Goals</h1>
        <Lottie
          animationData={heart}
          loop={true}
          style={{ height: "80px", width: "80px" }}
        />
      </div>

      {/* Workout Task */}
      <div
        className="mx-8 flex items-center justify-between p-4 my-2 rounded-lg"
        style={{ backgroundColor: "#292928" }}
      >
        <div>
          <div
            className="bg-white p-4 rounded-lg"
            style={{ backgroundColor: "#3C3C3D" }}
          >
            <FitnessCenterIcon fontSize="large" style={{ color: "#9F4DB8" }} />
          </div>
        </div>
        <h1 className="text-xl text-white">Workout for 20 mins</h1>
        <Checkbox
          size="large"
          sx={{
            color: "#9F4DB8",
            "&.Mui-checked": {
              color: "#9F4DB8",
            },
          }}
          value="workout"
          checked={tasks.includes("workout")}
          onChange={handleTaskChange}
        />
      </div>
      {/* //Read Task */}
      <div
        className="mx-8 flex items-center justify-between p-4 my-2 rounded-lg"
        style={{ backgroundColor: "#292928" }}
      >
        <div>
          <div
            className="bg-white p-4 rounded-lg"
            style={{ backgroundColor: "#3C3C3D" }}
          >
            <WhatshotIcon fontSize="large" style={{ color: "#DF6D52" }} />
          </div>
        </div>
        <h1 className="text-xl text-white">Read book for 15 mins</h1>
        <Checkbox
          sx={{
            color: "#D15439",
            "&.Mui-checked": {
              color: "#D15439",
            },
          }}
          size="large"
          value="read"
          checked={tasks.includes("read")}
          onChange={handleTaskChange}
        />
      </div>
      {/* Walk Task */}
      <div
        className="mx-8 flex items-center justify-between p-4 my-2 rounded-lg"
        style={{ backgroundColor: "#292928" }}
      >
        <div>
          <div
            className="bg-white p-4 rounded-lg"
            style={{ backgroundColor: "#3C3C3D" }}
          >
            <DirectionsWalkIcon fontSize="large" style={{ color: "#81B47D" }} />
          </div>
        </div>
        <h1 className="text-xl text-white">30 mins walk</h1>
        <Checkbox
          sx={{
            color: "#81B47D",
            "&.Mui-checked": {
              color: "#81B47D",
            },
          }}
          size="large"
          value="walk"
          checked={tasks.includes("walk")}
          onChange={handleTaskChange}
        />
      </div>
      {/* Sleep Task */}
      <div
        className="mx-8 flex items-center justify-between p-4 my-2 rounded-lg"
        style={{ backgroundColor: "#292928" }}
      >
        <div>
          <div
            className="bg-white p-4 rounded-lg"
            style={{ backgroundColor: "#3C3C3D" }}
          >
            <NightsStayIcon fontSize="large" style={{ color: "#63A9A6" }} />
          </div>
        </div>
        <h1 className="text-xl text-white">Sleep at 11 sharp</h1>
        <Checkbox
          sx={{
            color: "#63A9A6",
            "&.Mui-checked": {
              color: "#D15439",
            },
          }}
          size="large"
          value="sleep"
          checked={tasks.includes("sleep")}
          onChange={handleTaskChange}
        />
      </div>
      {/* Water Task */}
      <div
        className="mx-8 flex items-center justify-between p-4 my-2 rounded-lg"
        style={{ backgroundColor: "#292928" }}
      >
        <div>
          <div
            className="bg-white p-4 rounded-lg"
            style={{ backgroundColor: "#3C3C3D" }}
          >
            <WaterDropIcon fontSize="large" style={{ color: "#5A92CB" }} />
          </div>
        </div>
        <h1 className="text-xl text-white">Drink 3L water</h1>
        <Checkbox
          sx={{
            color: "#5A92CB",
            "&.Mui-checked": {
              color: "#5A92CB",
            },
          }}
          size="large"
          value="water"
          checked={tasks.includes("water")}
          onChange={handleTaskChange}
        />
      </div>

      {/* Swipe button */}
      <div
        className="flex justify-center m-8"
        style={{ backgroundColor: "#202121" }}
      >
        <div
          className="align-middle w-8/12 h-fit m-2"
          style={{ backgroundColor: "#202121", zIndex: 0 }}
        >
          <SwipeableButton
            onSuccess={onSuccess}
            text="Swipe to track all"
            text_unlocked="Yeeee!!!"
            color="#D15439"
          />
        </div>
      </div>

      {/* Graph Bar */}
      <div
        className="mx-8 my-2 rounded-lg p-4 flex justify-center"
        style={{ backgroundColor: "#292928" }}
      >
        <BarGraph />
      </div>
    </div>
  );
}

export default Home;
