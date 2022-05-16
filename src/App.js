import Home from "./component/Home/Home";
import "./App.css";
import Welcome from "./component/Welcome/Welcome";
import ProtectedRoutes from "./component/ProtectedRoutes/ProtectedRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/*" element={<Welcome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

