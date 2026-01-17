import React from 'react';
import Layout from '../components/layout';
import { productsList } from '../data/products';

const productCardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '1rem',
  marginBottom: '1.5rem',
  maxWidth: '480px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.07)',
};

const productImageStyle = {
  width: '100%',
  maxHeight: '180px',
  objectFit: 'cover',
  borderRadius: '6px',
};

const priceStyle = {
  fontWeight: '700',
  fontSize: '1.25rem',
  marginTop: '0.5rem',
  color: '#0070f3',
};

export default function Catalogue() {
  return (
    <Layout bgColor="#ffffff">
      <h1>Our Courses & Services</h1>
      {productsList.map((product) => (
        <div key={product.id} style={productCardStyle}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} style={productImageStyle} />
          <p>{product.description}</p>
          <p style={priceStyle}>{product.price}</p>
        </div>
      ))}
    </Layout>
  );
}
