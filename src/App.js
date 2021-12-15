import logo from "./logo.svg";
import "./App.css";
import Product from "./components/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route exact path="/" component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
