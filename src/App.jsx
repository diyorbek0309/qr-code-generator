import { Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Result from "./pages/Result";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
