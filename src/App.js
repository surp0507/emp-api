import Employee from "./Employee";
import { IndividualEmp } from "./IndividualEmp";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employee />} />
          <Route path="/emp/:id" element={<IndividualEmp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
