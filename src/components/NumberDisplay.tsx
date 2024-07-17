import React from 'react';

interface NumberDisplayProps {
    maxNumber: number;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ maxNumber }) => {
    if (maxNumber < 0) {
        return <div>Nice try :)</div>;
    }
    const numbers = Array.from({ length: maxNumber }, (_, i) => i + 1);
    return (
        <div>
            {numbers.join(', ')}
        </div>
    );
};

export default NumberDisplay;