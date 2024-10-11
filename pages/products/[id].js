import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import Layout from '../../components/Layout';
import ProductDetails from '../../components/ProductDetails';
import { fetchProductById } from '../../store/ProductsSlice';
import styles from '../../styles/ProductDetails.module.scss';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const { currentProduct, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [dispatch, id]);

  if (loading) return <Layout><div>Loading...</div></Layout>;
  if (error) return <Layout><div>Error: {error}</div></Layout>;
  if (!currentProduct) return <Layout><div>Product not found</div></Layout>;

  return (
    <Layout>
      <div className={styles.container}>
        <ProductDetails product={currentProduct} />
      </div>
    </Layout>
  );
}