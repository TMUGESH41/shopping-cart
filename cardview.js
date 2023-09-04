  import React from 'react';
 import { useLocation } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.css';
//   import 'bootstrap/dist/js/bootstrap.js';
  import Card from 'react-bootstrap/Card';

  const CardView = () => {
      const location = useLocation();
      console.log(location);
      const product = location.state.value;

      return (
          <div>
              <h2>VIEW</h2>
              <Card style={{ width: '50rem' }}>
                  <Card.Img variant="top" style={{ width: '20rem' }} src={product.product.image} />
                  <Card.Body>
                      <Card.Title>ID: {product.product.id}</Card.Title>
                      
                      <Card.Title>TITLE: {product.product.title}</Card.Title>
                      <Card.Text>
                          DESCRIPTION: {product.product.description}
                      </Card.Text>
                      <Card.Text>
                          PRICE: {product.product.price}
                      </Card.Text>
                  </Card.Body>
              </Card>
             </div>
      );
  }

  export default CardView;




