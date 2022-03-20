import "./App.css";
import { RoutingPath } from "./configs";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RoutingPath/>
      <Footer/>
    </div>
  );
}

export default App;