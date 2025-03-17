import React from 'react';

const ViewProduct = () => {
  return (
    <button style={buttonStyle} onClick={() => alert('Viewing Product Details')}>
      View Product
    </button>
  );
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  marginTop: '10px',
};

export default ViewProduct;
