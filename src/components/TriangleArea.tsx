import React from 'react';

interface TriangleAreaProps {
    height: number | null;
    width: number | null;
}

const TriangleArea: React.FC<TriangleAreaProps> = ({ height, width }) => {
    if (height === null || width === null || height === 0 || width === 0) {
        return null;
    }

    const area = 0.5 * height * width;
    return (
        <div>
            The calculated area is {area}
        </div>
    );
};

export default TriangleArea;
