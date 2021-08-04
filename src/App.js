import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Header from './components/Header';
import Products from "./components/Products";
import CartListing from "./components/CartListing";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          
          <Route path="/login">
            <Header/>
            <Login/>
          </Route>
          <Route path="/register">
            <Header/>
            <Register/>
          </Route>
          <Route path="/products">
            <Header/>
            <Products/>
          </Route>
          <Route path="/cartListing">
            <Header/>
            <CartListing/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
        
      </div>
    </Router>
    
  );
}

export default App;
