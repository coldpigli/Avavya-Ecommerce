import "./App.css";
import { RoutingPath } from "./configs";
import { ToastContainer} from 'react-toastify';
import { Footer, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <RoutingPath/>
      <Footer/>
      <ToastContainer />
    </div>
  );
}

export default App;