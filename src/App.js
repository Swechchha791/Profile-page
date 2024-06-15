import "./App.css";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import About from "./components/About";
import { Row } from "react-bootstrap";

function App() {
  return (
    <div fluid className="App">
      <Row>
        <Profile />
        <About />
        <Footer />
      </Row>
    </div>
  );
}

export default App;
