import logo from "./logo.svg";
import Navbar from "./Components/Navbar";
import SortingVisualizer from "./SortingVisualizer/SortingVisualizer";
import "./App.css";

function App() {

  return (
    <div className="App">
      <Navbar />
      <SortingVisualizer />
    </div>
  );
}

export default App;
