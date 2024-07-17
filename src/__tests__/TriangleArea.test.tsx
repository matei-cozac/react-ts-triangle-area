import React from 'react';
import { render } from '@testing-library/react';
import TriangleArea from '../components/TriangleArea';

test('calculates and displays the area of the triangle', () => {
    const { getByText } = render(<TriangleArea height={10} width={5} />);
    expect(getByText('The calculated area is 25')).toBeInTheDocument();
});