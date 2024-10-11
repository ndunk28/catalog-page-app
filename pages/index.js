import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import { fetchProducts } from '../store/productsSlice';
import styles from '../styles/Home.module.scss';

export default function Home() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Layout><div>Loading...</div></Layout>;
  if (error) return <Layout><div>Error: {error}</div></Layout>;

  return (
    <Layout>
      <div className={styles.container}>
        <h1 className={styles.title}>Product Catalog</h1>
        <div className={styles.filterSection}>
          <h2 className={styles.filterTitle}>Filter by Category</h2>
          <div className={styles.filterOptions}>
            <button className={`${styles.filterButton} ${styles.active}`}>All</button>
            <button className={styles.filterButton}>Electronics</button>
            <button className={styles.filterButton}>Clothing</button>
            <button className={styles.filterButton}>Books</button>
          </div>
        </div>
        <div className={styles.productGrid}>
          <ProductList products={products} />
        </div>
        {products.length > 0 && (
          <button className={styles.loadMoreButton}>Load More</button>
        )}
      </div>
    </Layout>
  );
}