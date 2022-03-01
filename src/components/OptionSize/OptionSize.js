import styles from './OptionSize.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const OptionSize = props => {
  
  return (
    <ul className={styles.choices}>
      {props.sizes.map(size => <li key={shortid}><button onClick={() => props.action(size.name, size.additionalPrice)} type="button" className={clsx(props.currentSize === size.name && styles.active )}>{size.name}</button></li>)}
    </ul>
  )
}

OptionSize.propTypes = {
  props: PropTypes.object.isRequired
}

export default OptionSize;