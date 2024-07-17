import { render, screen } from '@testing-library/react';
import App from './App';

test('renders input fields and labels', () => {
    render(<App />);
    expect(screen.getByLabelText(/Max Number to Print/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Height/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Width/i)).toBeInTheDocument();
});
