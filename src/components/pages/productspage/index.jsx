import React from 'react';
import Seo from '../../seo';
import Product from './product';

import products from '../../data/products.json';

export default function ProductsPage () {
  return (
    <React.Fragment>
      <Seo title="Our Products" />
      <h1>Shit we sell!</h1>
      <div className="products">
        {products.map (product => <Product key={product.name} {...product} />)}
      </div>
    </React.Fragment>
  );
}
