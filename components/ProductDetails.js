import React, { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/ProductDetails.module.scss';

const ProductDetails = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  return (
    <div className={styles.productDetails}>
      <div className={styles.productImages}>
        <div className={styles.imageContainer}>
          <Image 
            src={product.image} 
            alt={`${product.name} - Image`} 
            layout="fill" 
            objectFit="cover"
          />
        </div>
      </div>
      <div className={styles.productInfo}>
        <h1 className={styles.productName}>{product.name}</h1>
        <p className={styles.productPrice}>${selectedVariant.price.toFixed(2)}</p>
        <p className={styles.productDescription}>{product.description}</p>
        <div className={styles.variantSelector}>
          <h3>Variants:</h3>
          {product.variants.map((variant) => (
            <button
              key={variant.id}
              className={`${styles.variantButton} ${selectedVariant.id === variant.id ? styles.selected : ''}`}
              onClick={() => setSelectedVariant(variant)}
            >
              {variant.name}
            </button>
          ))}
        </div>
        <button className={styles.addToCartButton}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;