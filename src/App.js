import { Route, Routes } from "react-router-dom";

import { useContext } from "react";
import "./App.css";
import Weather from "./components/Weather";
import { Calo } from "./quy/components/Calo";
import { Home } from "./quy/components/Home";
import { Navbar } from "./quy/components/Navbar";
import { Signin } from "./quy/components/Signin";
import { Signup } from "./quy/components/Signup";
import { Tdee } from "./quy/components/Tdee";
import { TdeeContext } from "./quy/context/Context";
function App() {
  const tdee = useContext(TdeeContext);

  return (
    <div className="App">
      {/* <Header /> */}
      {tdee.logged && <Navbar />}
      <Signin />
      <Signup />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tdee" element={<Tdee />} />
        <Route path="/calo" element={<Calo />} />
        <Route path="/weather" element={<Weather />} />
        {/* <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} /> */}
      </Routes>
    </div>
  );
}

export default App;
