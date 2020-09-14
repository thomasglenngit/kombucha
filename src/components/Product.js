import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

function Product(props) {
  const { name, brand, flavor, price, pints, id, onProductClick } = props;
  return (
    <Card onClick={()=>onProductClick(id)}>
      <Card.Header as='h5'>{name}</Card.Header>
      <Card.Body>
        <Card.Text>{brand}</Card.Text>
        <Card.Text>{flavor}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <Card.Text>{pints}</Card.Text>
      </Card.Body>
    </Card>
  )
}


Product.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.string,
  pints: PropTypes.string,
  id: PropTypes.string,
  onProductClick: PropTypes.func
}

export default Product;