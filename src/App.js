import "./App.css";
import { RoutingPath } from "./configs";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RoutingPath/>
    </div>
  );
}

export default App;