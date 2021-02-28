import React from 'react';

interface DesignWidgetContextValue {
    baseAngle: number;
    baseColor: string;
    setBaseAngle?: (num: number) => void;
    setBaseColor?: (color: string) => void;
}

export const DesignWidgetContext = React.createContext<DesignWidgetContextValue>({
    baseAngle: 0,
    baseColor: '#4400DD'
});