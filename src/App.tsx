import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { AuthRoutes } from "@routes/AuthRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AuthRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
