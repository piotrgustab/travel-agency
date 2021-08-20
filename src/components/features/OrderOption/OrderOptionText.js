import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

const OrderOptionText = ({setOptionValue, currentValue}) => {
  return (
    <input
      type='text'
      className={styles.input}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}/>
  );
};

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionText;
