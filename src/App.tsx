import React, { useState } from 'react';
import NumberDisplay from './components/NumberDisplay';
import TriangleArea from './components/TriangleArea';
import './App.css';

const App: React.FC = () => {
    const [maxNumber, setMaxNumber] = useState<number | null>(null);
    const [height, setHeight] = useState<number | null>(null);
    const [width, setWidth] = useState<number | null>(null);

    return (
        <div className="App">
            <div>
                <label htmlFor="maxNumber">Max Number to Print</label>
                <input 
                    id="maxNumber"
                    type="number" 
                    onChange={(e) => setMaxNumber(Number(e.target.value))}
                />
                {maxNumber !== null && <NumberDisplay maxNumber={maxNumber} />}
            </div>
            <div className="input-group">
                <div>
                    <label htmlFor="height">Height</label>
                    <input 
                        id="height"
                        type="number" 
                        onChange={(e) => setHeight(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label htmlFor="width">Width</label>
                    <input 
                        id="width"
                        type="number" 
                        onChange={(e) => setWidth(Number(e.target.value))}
                    />
                </div>
            </div>
            {height !== null && width !== null && <TriangleArea height={height} width={width} />}
        </div>
    );
};

export default App;
