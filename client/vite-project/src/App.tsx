import Header from "./components/landing/header";
import LandingBody from "./components/landing/landingBody.tsx";
import Footer from "./components/landing/footer.jsx";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
function App() {
  return (
    <div>
      <Header />
      <LandingBody />
      <Footer />
    </div>
  );
}

export default App;
