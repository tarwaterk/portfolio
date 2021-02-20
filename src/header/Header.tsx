import React, { Dispatch, SetStateAction } from 'react';
import './header.css';
import { DesignWidget } from '../designPicker/index';
import { generateLinearGradient } from '../utils/color';

interface Props {
    baseAngle: number;
    baseColor: string;
    setBaseAngle: Dispatch<SetStateAction<number>>;
    setBaseColor: Dispatch<SetStateAction<string>>;
}

export const Header:React.FC<Props> = ({ baseAngle, baseColor, setBaseAngle, setBaseColor }) => {
    const imageBackground = generateLinearGradient(baseColor, baseAngle);

    return (
        <div className={'header'} style={{backgroundImage: imageBackground}}>
            <div>Kevin Tarwater</div>
            <DesignWidget onAngleUpdate={setBaseAngle} onColorUpdate={setBaseColor} />
        </div>
    );
};
