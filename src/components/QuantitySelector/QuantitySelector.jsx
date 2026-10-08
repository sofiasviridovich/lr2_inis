import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './QuantitySelector.module.css';

function QuantitySelector({ initialValue = 1, min = 1, max = 99, onChange }) {
  const [quantity, setQuantity] = useState(initialValue);

  const handleDecrease = () => {
    if (quantity > min) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      const newValue = quantity + 1;
      setQuantity(newValue);
      onChange?.(newValue);
    }
  };

  return (
    <div className={styles.selector}>
      <button
        className={styles.button}
        onClick={handleDecrease}
        disabled={quantity <= min}
        type="button"
        aria-label="Уменьшить количество"
      >
        −
      </button>
      <span className={styles.value} aria-live="polite">
        {quantity.toString().padStart(2, '0')}
      </span>
      <button
        className={styles.button}
        onClick={handleIncrease}
        disabled={quantity >= max}
        type="button"
        aria-label="Увеличить количество"
      >
        +
      </button>
    </div>
  );
}

QuantitySelector.propTypes = {
  initialValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
};

export default QuantitySelector;
