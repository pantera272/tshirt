import styles from './OptionColor.module.scss';
import shortid from 'shortid';
import clsx from 'clsx';
import PropTypes from 'prop-types';


const OptionColor = props => {
  //console.log('option color',props.action);

  const prepareColorClassName = item => {
    item = item.charAt(0).toUpperCase() + item.slice(1);
    item = styles['color' + item];
    return item;
  }


  return (
    <ul className={styles.choices}>
      {props.colors.map(color => <li key={shortid()}><button onClick={() =>props.action(color)} type="button" className={clsx(prepareColorClassName(color),  color === props.currentColor && styles.active)} /></li>)}
    </ul> 
  )
}

OptionColor.propTypes = {
  props: PropTypes.object.isRequired
}

export default OptionColor;