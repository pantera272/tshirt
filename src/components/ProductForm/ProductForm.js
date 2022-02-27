import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';

const ProductForm = props => {
  //console.log('Product form',props);
  return (
    <form>
      <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <OptionSize sizes={props.sizes} currentSize={props.currentSize} action={props.actionSize}/>
      </div>
      <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <OptionColor colors={props.colors} currentColor={props.currentColor} action={props.actionColor}/>
      </div>
        <Button className={styles.button}>
          <span className="fa fa-shopping-cart" />
        </Button>
      </form>
  )
}

export default ProductForm;