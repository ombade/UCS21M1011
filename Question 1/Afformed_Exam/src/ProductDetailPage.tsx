import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage(): JSX.Element {
  const { productId } = useParams<{ productId: string }>();

  return (
    <div className="product-detail-page">
      <h1>Product Detail</h1>
      <p>Product ID: {productId}</p>
      {/* Add more product details here */}
    </div>
  );
}

export default ProductDetailPage;
