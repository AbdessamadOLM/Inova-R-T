import { BrowserRouter } from "react-router-dom";
import "./App.css";
import MyRoute from "./MyRoute";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyRoute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
