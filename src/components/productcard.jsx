import React from 'react';
import ViewProduct from './button';


const Productcard = () => {
  const productImage = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRR92jpaoZTwtMew82LmQQ2fr2v3MPsidd5aqEnIhYfz7dJX2KEwwZfeIn-SvNXIGiQlPhHD7_Alk2-sb7iLxFuR9vb1U3SL_NJ15VhlPv_2-bpqSt-Dj1b&usqp=CAE';
  const productName = 'Samsung Galaxy S24 Ultra';
  const price = '₹1,59,000';

  return (
    <div >
      <img src={productImage} alt={productName}  />
      <h2>{productName}</h2>
      <h3>Price: {price}</h3>
      <ViewProduct />
    </div>
  );
};



 

export default Productcard;
