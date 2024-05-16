import BottomNavigator from "./navigation/BottomNavigator";
import StackRouter from "./navigation/StackRouter";

function App() {
  return (
    <div style={{ background: "#202121", position: "absolute" }}>
      <StackRouter />
      <BottomNavigator />
    </div>
  );
}

export default App;
