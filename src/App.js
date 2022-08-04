import { 
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";


import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
    return (
      <div className="App">
          <Router>
              <Navigation />
              <Switch>
                  <Route path="/products/:handle">
                      <ProductPage />
                  </Route>
                  <Route path="/" exact>
                      <Home />
                  </Route>
              </Switch>
              <p>Base Footer</p>
          </Router>
      </div>
    );
}

export default App;
