import React, { useState } from 'react';
import { Header } from '../header/Header';
import { Resume } from '../resume/Resume';

export const LandingPage:React.FC = () => {
    const [baseAngle, setBaseAngle] = useState(0);
    const [baseColor, setBaseColor] = useState('#00FF00');

    return (
        <>
            <Header baseAngle={baseAngle} baseColor={baseColor} setBaseAngle={setBaseAngle} setBaseColor={setBaseColor} />
            <Resume baseAngle={baseAngle} baseColor={baseColor} />
        </>
    );
};
