import { 
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./components/Cart";
import Navigation from "./components/Navigation";
import NavigationMenu from "./components/NavigationMenu";

function App() {
    return (
      <div className="App">
          <Router>
              <Navigation/>
              <Cart/>
              <NavigationMenu/>
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
