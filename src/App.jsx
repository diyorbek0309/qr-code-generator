import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Form from "./pages/Form";
import Result from "./pages/Result";
import "./App.css";

function App() {
  const [result, setResult] = useState(null);
  const handleResult = (res) => {
    setResult(res);
  };

  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Form setResult={handleResult} />} />
        <Route path="/result" element={<Result result={result} />} />
      </Routes> */}
      <Form setResult={handleResult} />
      {result && <Result result={result} />}
      <ToastContainer />
    </div>
  );
}

export default App;
