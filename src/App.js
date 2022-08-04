import { 
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
    return (
      <div className="App">
          <Router>
              <Routes>
                  <Route path="/products/:handle">
                      <ProductPage />
                  </Route>
                  <Route path="/" exact>
                      <Home />
                  </Route>
              </Routes>
              <p>Base Footer</p>
          </Router>
      </div>
    );
}

export default App;
