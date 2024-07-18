import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import App from './App';

test('renders input fields and labels', () => {
    act(() => {
        render(<App />);
    });
    expect(screen.getByLabelText(/Max Number to Print/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Height/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Width/i)).toBeInTheDocument();
});

test('renders numbers up to the max number when input is provided', () => {
    act(() => {
        render(<App />);
    });

    const maxNumberInput = screen.getByLabelText(/Max Number to Print/i);
    act(() => {
        fireEvent.change(maxNumberInput, { target: { value: '5' } });
    });

    expect(screen.getByText(/1, 2, 3, 4, 5/)).toBeInTheDocument();
});

test('renders "Nice try :)" when negative max number is provided', () => {
    act(() => {
        render(<App />);
    });

    const maxNumberInput = screen.getByLabelText(/Max Number to Print/i);
    act(() => {
        fireEvent.change(maxNumberInput, { target: { value: '-5' } });
    });

    expect(screen.getByText(/Nice try :\)/)).toBeInTheDocument();
});

test('calculates and displays the area of the triangle when height and width are provided', () => {
    act(() => {
        render(<App />);
    });

    const heightInput = screen.getByLabelText(/Height/i);
    const widthInput = screen.getByLabelText(/Width/i);

    act(() => {
        fireEvent.change(heightInput, { target: { value: '10' } });
        fireEvent.change(widthInput, { target: { value: '5' } });
    });

    expect(screen.getByText(/The calculated area is 25/)).toBeInTheDocument();
});

test('returns null when height or width is missing', () => {
    act(() => {
        render(<App />);
    });

    const heightInput = screen.getByLabelText(/Height/i);
    const widthInput = screen.getByLabelText(/Width/i);

    act(() => {
        fireEvent.change(heightInput, { target: { value: '10' } });
        fireEvent.change(widthInput, { target: { value: '' } });
    });

    expect(screen.queryByText(/The calculated area is/)).toBeNull();

    act(() => {
        fireEvent.change(heightInput, { target: { value: '' } });
        fireEvent.change(widthInput, { target: { value: '5' } });
    });

    expect(screen.queryByText(/The calculated area is/)).toBeNull();
});
