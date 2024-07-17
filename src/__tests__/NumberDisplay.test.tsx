import { render, screen } from '@testing-library/react';
import { act } from 'react';
import NumberDisplay from '../components/NumberDisplay';

test('displays numbers up to the max number', () => {
    act(() => {
        render(<NumberDisplay maxNumber={5} />);
    });
    expect(screen.getByText(/1, 2, 3, 4, 5/)).toBeInTheDocument();
});