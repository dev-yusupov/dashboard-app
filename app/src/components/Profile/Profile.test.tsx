import { render, screen } from '@testing-library/react';
import Profile from './Profile';

describe('Profile component unit tests', () => {
    it('test correctly renders name', () => {
        const name = 'Testov';
        const role = 'admin';

        render(<Profile name={name} role={role} />);

        const profileElement = screen.getByTestId('profile-Testov');
        const nameElement = screen.getByTestId(`profile-name-${name}`);
        const roleElement = screen.getByTestId(`profile-role-${role}`);

        expect(profileElement).toBeInTheDocument();
        expect(nameElement).toBeInTheDocument();
        expect(roleElement).toBeInTheDocument();
    });
});
