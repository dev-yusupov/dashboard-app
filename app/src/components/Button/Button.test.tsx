import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';
import Button from './Button';

describe('Button component', () => {
  test('renders the button with correct label', () => {
    const label = 'Click Me';
    const mockOnClick = jest.fn();

    render(<Button onClick={mockOnClick} label={label} />);

    // Assert that the button is in the document and has the correct label
    const buttonElement = screen.getByText(label);
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(label);
  });

  test('calls onClick handler when button is clicked', () => {
    const mockOnClick = jest.fn(); // Mock function for the onClick event
    const label = 'Click Me';

    render(<Button onClick={mockOnClick} label={label} />);

    const buttonElement = screen.getByText(label);

    // Simulate a click event on the button
    fireEvent.click(buttonElement);

    // Assert that the onClick function was called once
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
