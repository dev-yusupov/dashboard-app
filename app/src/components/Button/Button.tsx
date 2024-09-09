import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

/**
 * Button component with various styles and behaviors.
 *
 * @param {string} label - The text to display on the button.
 * @param {"primary" | "secondary" | "white"} variant - The button variant style.
 * @param {() => void} onClick - The function to call when the button is clicked.
 * @param {boolean} disabled - Whether the button is disabled.
 */
interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'white';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick, disabled }) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    className={`button ${variant}-button`}
    aria-label={label}
  >
    {label}
  </button>
);

/**
 * Prop types for the Button component.
 */
Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'white']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Button;