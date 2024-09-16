import React from 'react';

import ProductItem from '../components/Products/ProductItem';
import './Products.css';
import { useProductsContext } from '../context/products-context';

function Products(props) {
  const { productList } = useProductsContext();

  return (
    <ul className="products-list">
      {productList.map(prod => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
}

export default Products;
