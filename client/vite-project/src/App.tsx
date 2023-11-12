import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Login from "./components/landing/login.tsx";
import Men from "./components/productCollection/menCollection.tsx";
import { Routes, Route } from "react-router-dom";

import { RecoilRoot } from "recoil";
import Landing from "./components/landing.tsx";
function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/men" element={<Men />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
