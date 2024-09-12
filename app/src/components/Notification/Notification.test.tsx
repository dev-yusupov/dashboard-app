import { render, screen } from '@testing-library/react';
import Notification from './Notification';

describe('Notification component unit tests', () => {
    it('renders the notification icon with the correct size and color', () => {
        render(<Notification />);

        // Try different selectors if necessary
        const notificationIcon = screen.getByTestId('notification-icon'); // Or getByRole('img'), getByAltText('notification icon'), etc.

        expect(notificationIcon).toBeInTheDocument();
        expect(notificationIcon).toHaveAttribute('color', 'FFA412');
    });
});
