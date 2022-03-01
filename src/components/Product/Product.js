import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';

const Product = props => {

  const possibleSize = props.sizes.map(size => size.name);

  const [currentSize, setCurrentSize] = useState(possibleSize[0]);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);

  const handleColor = color => {
    setCurrentColor(color); 
  }

  const handleSize = (size, price) => {
    setCurrentSize(size);
    setCurrentPrice(props.basePrice + price);
  }

  const sendOrder = e => {
    e.preventDefault();
    console.log('Summary');
    console.log('============');
    console.log('Name: ', props.name);
    console.log('Color: ', currentColor);
    console.log('Size: ', currentSize);
    console.log('Price: ', currentPrice);
  }

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} color={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {currentPrice}$</span>
        </header>
        <ProductForm colors={props.colors} currentColor={currentColor} actionColor={handleColor} actionSize={handleSize} actionSend={sendOrder} sizes={props.sizes} currentSize={currentSize}/>
      </div>
    </article>
  )
}

Product.propTypes = {
  props: PropTypes.object.isRequired
}

export default Product;