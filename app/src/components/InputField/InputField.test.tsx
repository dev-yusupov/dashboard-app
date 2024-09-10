import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from './InputField';

describe('InputField component unit tests', () => {
    /**
     * Test if the input field renders the correct label, placeholder, and type
     */
    it('renders the correct label, placeholder, and type', () => {
        render(
            <InputField
                id="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
            />
        );

        const inputField = screen.getByLabelText('Email');

        expect(inputField).toBeInTheDocument();

        // Verify type attribute
        expect(inputField).toHaveAttribute('type', 'email');

        // Verify placeholder attribute
        expect(inputField).toHaveAttribute('placeholder', 'Enter your email');
    });

    /**
     * Test if the input field calls the onChange handler when the value changes
     */
    it('calls the onChange handler when the input value changes', () => {
        const handleChange = jest.fn();
        const initialValue = 'Initial value';

        render(
            <InputField
                id="email"
                label="Email"
                type="email"
                value={initialValue}
                onChange={handleChange}
            />
        );

        const inputField = screen.getByLabelText('Email');

        // Simulate typing into the input field
        fireEvent.change(inputField, { target: { value: 'New value' } });

        // Verify that the onChange handler was called
        expect(handleChange).toHaveBeenCalled();
    });

    /**
     * Test if the input field reflects the value passed via the value prop
     */
    it('reflects the value passed via the value prop', () => {
        const initialValue = 'Initial value';

        render(<InputField id="email" label="Email" type="email" value={initialValue} />);

        const inputField = screen.getByLabelText('Email');

        // Verify that the input field's value matches the initial value
        expect(inputField).toHaveValue(initialValue);
    });

    /**
     * Test if the input field is disabled when the disabled prop is true
     */
    it('is disabled when the disabled prop is true', () => {
        render(<InputField id="email" label="Email" type="email" disabled />);

        const inputField = screen.getByLabelText('Email');

        // Verify that the input field is disabled
        expect(inputField).toBeDisabled();
    });

    /**
     * Test if the input field shows the error message when required and empty
     */
    //   it("displays the required error message when required and empty", () => {
    //     const errorMessage = "This field is required";

    //     render(<InputField id="email" label="Email" type="email" required errorMessage={errorMessage} />);

    //     const inputField = screen.getByLabelText("Email");
    //     fireEvent.blur(inputField); // Simulate user leaving the field without input

    //     const errorMessageElement = screen.getByText(errorMessage);
    //     expect(errorMessageElement).toBeInTheDocument();
    //   });

    /**
     * Test if the input field shows the character count when maxLength is set
     */
    it('displays the character count when maxLength is set', () => {
        const maxLength = 20;
        render(
            <InputField
                id="Username"
                label="Username"
                maxLength={maxLength}
                value="Initial"
            />
        );

        const charCount = screen.getByText('7/20');

        // Verify that the character count is displayed
        expect(charCount).toBeInTheDocument();
    });

    /**
     * Test if the input field shows the correct icon when the input is valid
     */
    it('shows the valid icon when input is valid', () => {
        render(<InputField id="Email" label="Email" value="test@example.com" />);

        const validIcon = screen.getByText('✔️');

        // Verify that the valid icon is shown
        expect(validIcon).toBeInTheDocument();
    });
});
