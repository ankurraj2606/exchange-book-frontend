import Example from "./components/navbar";
import "./App.css";
import SearchBox from "./components/searchbox";
import Footer from "./components/footer";
import CarouselPart from "./components/carousel.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <div className="App">
      <Example />
     
      <div>
        <Switch>
          <Route exact path="/">
            <CarouselPart />
          </Route>
          <Route path="/login" component={Login} />

          <Route path="/signup" component={Signup} />
        </Switch>
      </div>
     
      <Footer />
    </div>
  );
}

export default App;
