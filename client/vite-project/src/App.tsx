import Header from "./components/landing/header";
import LandingBody from "./components/landing/landingBody.tsx";
import Footer from "./components/landing/footer.jsx";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import Login from "./components/landing/login.tsx";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div>
        <Header />
        <Login />
      </div>
    </RecoilRoot>
  );
}

export default App;
