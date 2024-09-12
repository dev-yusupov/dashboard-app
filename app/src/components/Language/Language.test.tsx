import { render, screen } from '@testing-library/react';
import Language from './Language';

describe('Language component unit tests', () => {
    it('Renders correct language', () => {
        render(<Language />);

        const languageElement = screen.getByTestId('language-en');
        const arrowDownElement = screen.getByTestId('language-icon-arrowdown');

        expect(languageElement).toBeInTheDocument();
        expect(arrowDownElement).toBeInTheDocument();
    });
});
