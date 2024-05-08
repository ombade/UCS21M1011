import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProductsPage from './AllProductsPage';
import ProductDetailPage from './ProductDetailPage';
import ProductList from './ProductList';

function App(): JSX.Element {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={AllProductsPage} />
          <Route path="/product/:productId" component={ProductDetailPage} />
          <Route path="/product-list" ProuctList />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
