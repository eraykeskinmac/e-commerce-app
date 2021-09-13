import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Signin from './pages/Auth/Signin';
import Signup from './pages/Auth/Signup';
import Basket from './pages/Basket';
import Error404 from './pages/Error404';
import ProductDetail from './pages/ProductDetail';
import Products from './pages/Products';
import Profile from './pages/Profile';
import ProtectedRoute from './pages/ProtectedRoute';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Switch>
            <Route path="/" exact component={Products} />
            <Route path="/products" component={Products} />
            <Route path="/product/:product_id" component={ProductDetail} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/basket" component={Basket} />
            <ProtectedRoute path="/profile" component={Profile} />
            <ProtectedRoute path="/admin" component={Admin} admin={true} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
