import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './main.css';

import Layout from '../layouts';
import HomePage from '../pages/homepage';
import AboutPage from '../pages/aboutpage';
import ProductsPage from '../pages/productspage';

export default function App () {
  const [counter, setCounter] = useState (0);
  useEffect (() => {
    setCounter (prev => prev + 1);
  }, []);
  return (
    <BrowserRouter>
      <Layout onChange={() => setCounter (prev => prev + 1)}>
        <Switch>
          <Route exact path="/">
            <HomePage counter={counter} />
          </Route>
          <Route path="/about-us">
            <AboutPage counter={counter} />
          </Route>
          <Route path="/products">
            <ProductsPage counter={counter} />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
