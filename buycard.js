import React from 'react';
import { useLocation } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const Addcard = () => {
    const location = useLocation();
    console.log(location);
    const products = location.state.valuenew;
    console.log(products);

    return (
        <>
            {products.map((item, i) => {
                return (
                    <div key={i}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>PRICE</th>
                                    <th>CATEGORY</th>
                                    <th>DESCRIPTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{item.product.id}</td>
                                    <td>{item.product.price}</td>
                                    <td>{item.product.category}</td>
                                    <td>{item.product.description}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                );
            })}
        </>
    );
}

export default Addcard;