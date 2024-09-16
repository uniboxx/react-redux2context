import { createContext, useContext, useState } from 'react';

export const ProductsContext = createContext();

const initialState = [
  {
    id: 'p1',
    title: 'Red Scarf',
    description: 'A pretty red scarf.',
    isFavorite: false,
  },
  {
    id: 'p2',
    title: 'Blue T-Shirt',
    description: 'A pretty blue t-shirt.',
    isFavorite: false,
  },
  {
    id: 'p3',
    title: 'Green Trousers',
    description: 'A pair of lightly green trousers.',
    isFavorite: false,
  },
  {
    id: 'p4',
    title: 'Orange Hat',
    description: 'Street style! An orange hat.',
    isFavorite: false,
  },
];

function ProductsProvider({ children }) {
  const [productList, setProductList] = useState(initialState);

  return (
    <ProductsContext.Provider value={{ productList }}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProductsContext() {
  const context = useContext(ProductsContext);

  if (!context) throw new Error('ProductContext was used outside its provider');

  return context;
}

export default ProductsProvider;
