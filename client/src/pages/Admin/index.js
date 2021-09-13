import { Box } from '@chakra-ui/react';
import React from 'react';
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Home from './Home';
import Orders from './Orders';
import Products from './Products';
import './style.css';
function Admin() {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <Link to={url}>Home</Link>
          </li>
          <li>
            <Link to={`${url}/orders`}>Orders</Link>
          </li>
          <li>
            <Link to={`${url}/products`}>Products</Link>
          </li>
        </ul>
      </nav>

      <Box mt="10">
        <Switch>
          <Route exact path={path} component={Home}></Route>
          <Route path={`${path}/orders`} component={Orders}></Route>
          <Route path={`${path}/products`} component={Products}></Route>
        </Switch>
      </Box>
    </div>
  );
}

export default Admin;
