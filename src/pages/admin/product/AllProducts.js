import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import AdminNav from '../../../components/nav/AdminNav';
import { getProductsByCount, removeProduct } from '../../../functions/product';
import AdminProductCard from '../../../components/cards/AdminProductCard';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    try {
      const res = await getProductsByCount(100);
      setProducts(res.data);
      setLoading(false);
    } catch (error) {
      console.log('From admin dashboard', error.response);
      setLoading(false);
    }
  };

  const handleRemove = async (slug) => {
    if (window.confirm('Are your sure to delete the product?')) {
      try {
        const res = await removeProduct(slug, user.token);
        toast.error(`${res.data.title} deleted.`);
        await loadAllProducts();
      } catch (error) {
        console.log('From All products remove product', error.response);
        toast.error(error.response.data.err);
      }
    }
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-2'>
          <AdminNav />
        </div>

        <div className='col-md-10'>
          {loading ? (
            <h4 className='text-danger'>Loading...</h4>
          ) : (
            <h4>All products</h4>
          )}
          <div className='row'>
            {products.map((product) => (
              <div key={product._id} className='col-md-4 pb-3'>
                <AdminProductCard
                  product={product}
                  handleRemove={handleRemove}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
