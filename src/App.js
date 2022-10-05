import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./auth/login";
import Register from "./auth/register";
import Home from "./components/Home";
import Header from "./components/Layout/Header";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
