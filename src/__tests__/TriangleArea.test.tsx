import { render, screen } from '@testing-library/react';
import { act } from 'react';
import TriangleArea from '../components/TriangleArea';

test('calculates and displays the area of the triangle', () => {
    act(() => {
        render(<TriangleArea height={10} width={5} />);
    });
    expect(screen.getByText(/The calculated area is 25/)).toBeInTheDocument();
});