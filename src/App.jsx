import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/dashboard" element={token ? <Dashboard /> : <Login />} />
    </Routes>
  );
}

export default App;
