import React, { useState, useEffect } from 'react';
import { DesignWidgetContext } from './DesignWidgetContext';

interface Props {
    children: React.ReactNode;
}

export const DesignWidgetContextProvider: React.FC<Props> = ({ children }) => {
    const [baseAngle, setBaseAngle] = useState(15);
    const [baseColor, setBaseColor] = useState('#4400DD');
    let dwContextVal = {
        baseAngle,
        baseColor,
        setBaseAngle,
        setBaseColor
    };

    useEffect(() => {
        dwContextVal = {...dwContextVal};
    }, [baseAngle, baseColor]);

    return (
        <DesignWidgetContext.Provider value={dwContextVal}>
            {children}
        </DesignWidgetContext.Provider>
    )
};