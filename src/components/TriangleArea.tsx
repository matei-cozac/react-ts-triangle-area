import React from 'react';

interface TriangleAreaProps {
    height: number;
    width: number;
}

const TriangleArea: React.FC<TriangleAreaProps> = ({ height, width }) => {
    const area = 0.5 * height * width;
    return (
        <div>
            The calculated area is {area}
        </div>
    );
};

export default TriangleArea;