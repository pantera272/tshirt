import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { useState } from 'react';
import shortid from 'shortid';

const Product = props => {

  const possibleSize = props.sizes.map(size => size.name);

  const [currentSize, setCurrentSize] = useState(possibleSize[0]);
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);

  const prepareColorClassName = item => {
    item = item.charAt(0).toUpperCase() + item.slice(1);
    item = styles['color' + item];
    return item;
  }

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
      <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {currentPrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map(size => <li key={shortid()}><button onClick={() => handleSize(size.name, size.additionalPrice)} className={clsx(currentSize === size.name && styles.active )}>{size.name}</button></li>)}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map(color => <li key={shortid()}><button onClick={() => handleColor(color)}  type="button" className={clsx(prepareColorClassName(color), color === currentColor && styles.active)} /></li>)}        
            </ul>
          </div>
          <Button action={sendOrder} className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  )
}

export default Product;