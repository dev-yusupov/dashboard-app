import React, { useState, useEffect } from 'react';
import './InputField.css';

interface InputFieldProps {
    label?: string;
    required?: boolean;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    disabled?: boolean;
    type?: string;
    placeholder?: string;
    errorMessage?: string;
    width?: string;
    maxLength?: number;
    id?: string; // Add id for accessibility
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    required = false,
    onChange,
    value: propsValue,
    type = 'text',
    placeholder,
    errorMessage,
    disabled,
    width = '100%',
    maxLength,
    id, // Use id for accessibility
}) => {
    const [internalValue, setInternalValue] = useState(propsValue || '');
    const [isFocused, setIsFocused] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    useEffect(() => {
        if (propsValue !== undefined) {
            setInternalValue(propsValue);
        }
    }, [propsValue]);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setHasInteracted(true);
        setHasError(required && internalValue === '');
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setInternalValue(newValue);
        onChange?.(event);
        setHasError(required && newValue === '');
    };

    return (
        <div
            className={`input-field ${isFocused || internalValue ? 'focused' : ''} ${
                hasError && hasInteracted ? 'error' : ''
            }`}
        >
            <div className="input-container">
                <input
                    id={id} // Use the id prop for input field
                    type={type}
                    placeholder={isFocused ? '' : placeholder}
                    value={internalValue}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    disabled={disabled}
                    onChange={handleInputChange}
                    style={{ width }}
                    maxLength={maxLength}
                />
                {label && (
                    <label
                        htmlFor={id} // Link label to input via htmlFor
                        className={`input-label ${isFocused || internalValue ? 'float' : ''}`}
                    >
                        {label} {required && <span className="required">*</span>}
                    </label>
                )}
                {hasError && hasInteracted && (
                    <span className="error-icon" title={errorMessage}>
                        ⚠️
                    </span>
                )}
                {!hasError && internalValue && <span className="valid-icon">✔️</span>}
            </div>
            {maxLength && (
                <p className="character-count">
                    {internalValue.length}/{maxLength}
                </p>
            )}
            {hasError && hasInteracted && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default InputField;
