import React, { useState } from 'react';
import { Header } from '../header/Header';
import { Resume } from '../resume/Resume';

export const LandingPage:React.FC = () => {
    const [baseAngle, setBaseAngle] = useState(15);
    const [baseColor, setBaseColor] = useState('#4400DD');

    return (
        <>
            <Header baseAngle={baseAngle} baseColor={baseColor} setBaseAngle={setBaseAngle} setBaseColor={setBaseColor} />
            <Resume baseAngle={baseAngle} baseColor={baseColor} />
        </>
    );
};
