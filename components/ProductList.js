import React from 'react';
import ProductCard from './ProductCard';
import styles from '../styles/ProductList.module.scss';

const ProductList = ({ products }) => {
  if (products.length === 0) {
    return <div className={styles.noProducts}>No products found.</div>;
  }

  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <div key={product.id} className={styles.productItem}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;