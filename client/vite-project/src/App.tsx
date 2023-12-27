import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Login from "./components/landing/login.tsx";
import Men from "./components/productCollection/menCollection.tsx";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/landing/signup.tsx";
import { RecoilRoot } from "recoil";
import Landing from "./components/landing.tsx";
import Kids from "./components/productCollection/kidsCollection.tsx";
import Women from "./components/productCollection/womenCollection.tsx";
import CheckOut from "./components/checkout.tsx";
import About from "./components/about.tsx";
import HeadPhones from "./components/productCollection/headphonesCollection.tsx";
import Contact from "./components/contact.tsx";
import Earphones from "./components/productCollection/earphones.tsx";
function App() {
  return (
    <RecoilRoot>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/men" element={<Men />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/headphones" element={<HeadPhones />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/earphones" element={<Earphones />} />
      </Routes>
    </RecoilRoot>
  );
}

export default App;
