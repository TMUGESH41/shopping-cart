import React from 'react';
import { useLocation } from 'react-router-dom';
// import Card from 'react-bootstrap/Card';

const Addcard = () => {
    const location = useLocation();
    console.log(location);
    const product = location.state.cart;
    console.log(product);
    return (
        <>
            <div>
                <h2>Cart</h2>
              
                    {/* {product.map((product, i) => ( 
                     <li key={i}>
                  <p>  {product.product.id} </p>
                     </li> 
                      ))}   */}
               
            </div>
        </>
    );
}

export default Addcard;