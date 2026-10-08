import PropTypes from 'prop-types';
import styles from './Button.module.css';

function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
}) {
  const className = [
    styles.button,
    styles[variant],
    disabled ? styles.disabled : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'outline']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;