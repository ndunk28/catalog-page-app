import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ProductCard.module.scss';

const ProductCard = ({ product }) => {
  return (
    <Link href={`/products/${product.id}`} className={styles.productCard}>
      <div className={styles.imageContainer}>
        <Image 
          src={product.image} 
          alt={product.name} 
          layout="fill" 
          objectFit="cover"
        />
      </div>
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
    </Link>
  );
};

export default ProductCard;