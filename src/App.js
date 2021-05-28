import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
