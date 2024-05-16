import { Routes, Route } from "react-router-dom";
import Home from "../screens/home/Home";
import Page1 from "../screens/page1/Page1";
import Page2 from "../screens/page2/Page2";
import Page3 from "../screens/page3/Page3";

function StackRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
    </Routes>
  );
}

export default StackRouter;
