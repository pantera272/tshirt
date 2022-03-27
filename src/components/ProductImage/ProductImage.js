import styles from './ProductImage.module.scss';
import PropTypes from 'prop-types';

const  ProductImage = props => {
  return (
    <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.color}.jpg`} />
      </div>
  )
}

ProductImage.propTypes = {
  //props: PropTypes.object.isRequired
}
export default ProductImage;