import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('Button component unit tests', () => {
    /**
     * Tests if the button renders the correct label.
     */
    it('renders the correct label', () => {
        render(<Button label="Subscribe" />);

        const buttonElement = screen.getByText('Subscribe');

        expect(buttonElement).toBeInTheDocument();
    });

    /**
     * Tests if clicking the button triggers the onClick handler.
     */
    it('calls the onClick handler when clicked', () => {
        const handleClick = jest.fn();

        render(<Button label="Subscribe" onClick={handleClick} />);

        const buttonElement = screen.getByText('Subscribe');
        fireEvent.click(buttonElement);

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    /**
     * Tests if the button applies the correct variant style.
     */
    it('applies the correct variant style', () => {
        render(<Button label="Primary button" variant="primary" />);

        const buttonElement = screen.getByText('Primary button');
        expect(buttonElement).toHaveClass('primary-button');

        render(<Button label="Secondary button" variant="secondary" />);
        const secondaryButtonElement = screen.getByText('Secondary button');
        expect(secondaryButtonElement).toHaveClass('secondary-button');
    });

    /**
     * Tests if the button is disabled when the disabled prop is true.
     */
    it('is disabled when the disabled prop is true', () => {
        render(<Button label="Disabled button" disabled />);

        const buttonElement = screen.getByText('Disabled button');

        expect(buttonElement).toBeDisabled();
    });

    /**
     * Tests if the button does not trigger the onClick handler when disabled.
     */
    it('should not trigger onClick when disabled', () => {
        const handleClick = jest.fn();

        render(<Button label="Disabled Button" disabled onClick={handleClick} />);

        const buttonElement = screen.getByText('Disabled Button');

        fireEvent.click(buttonElement);

        expect(handleClick).not.toHaveBeenCalled();
    });
});
