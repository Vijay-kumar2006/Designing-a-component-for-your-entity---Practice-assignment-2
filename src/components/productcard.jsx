// write product card here
import react from 'react'

import viweProduct from '../components/button.jsx';

const productDetails=()=>{
  const productImage = 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRR92jpaoZTwtMew82LmQQ2fr2v3MPsidd5aqEnIhYfz7dJX2KEwwZfeIn-SvNXIGiQlPhHD7_Alk2-sb7iLxFuR9vb1U3SL_NJ15VhlPv_2-bpqSt-Dj1b&usqp=CAE';
  const productName = 'Samsung galaxy s24 ultra';
  const price = "1,59,000.00"

  return (
    <div className="product-card">
      <img src={productImage} alt="{}"/>
      <h2>Name:  {productName}</h2>
      <h2>Price : {price}</h2>
      <viweProduct/>
    </div>
  );
};

export default productDetails;
