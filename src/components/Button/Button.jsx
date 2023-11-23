import PropTypes from "prop-types";
import "./style.css"

const Button = ({ label, onClick, type, disabled }) => {
    return (
        <button className={`custom-button ${disabled ? 'disabled' : ''}`} type={type} onClick={onClick} disabled={disabled}>
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    type: "button",
    disabled: false,
}

export default Button