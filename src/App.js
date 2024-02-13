import Header from "./components/Header";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import "./App.css";

function App() {
  return (
    <div className="root-container">
      <Header />
      <div className="body">
        <Leftbar/>
        <Rightbar/>
      </div>
    </div>
  );
}

export default App;
