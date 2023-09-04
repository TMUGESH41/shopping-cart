import axios from "axios";
import Card from 'react-bootstrap/Card';
import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import "./img1.css";
// import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
    const [products, setProducts] = useState([]);

    const navigate = useNavigate();

    const handleClick = (product) => () => {
        navigate('/cardview', { state: { value: product } });
        // console.log(product);
    };

    const [cart, setNames] = useState([]);
    console.log(cart);

    const handleClickbtn = (product) => () => {
        navigate({ state: { value: cart } }); //'/addcard',
        setNames(current => [...current, product]);
    };

    const handleClickbutton = () => {
        console.log(cart);
        navigate('/buycard', { state: { valuenew: cart } });
    }

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    return (
        <>
            <h2>Axios Library in React js</h2>


            <Row>
                {products.map((product, i) => {
                    return (
                        <Col key={i} lg={4} md={6} xs={12}>
                            <Card style={{ width: 'auto',height: '26rem' }}>
                                <Card.Img variant="top" style={{ width: '15rem' }} src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                        Price : ${product.price}
                                    </Card.Text>
                                </Card.Body>

                                <div className="btn-flex">
                                    <Button variant="primary" onClick={handleClick({ product })}>VIEW</Button>

                                    <Button variant="primary" onClick={handleClickbtn({ product })}>ADD CARD</Button>

                                    <Button variant="primary" onClick={() => handleClickbutton(cart)}>BUY NOW</Button>
                                </div>
                            </Card>
                        </Col>


                    );
                })}
            </Row >

        </>
    )
}
export default Home;



