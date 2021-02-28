import React, { Dispatch, SetStateAction } from 'react';
import './header.css';
import { DesignWidget } from '../designPicker/index';
import { generateLinearGradient } from '../utils/color/color';

interface Props {
    baseAngle: number;
    baseColor: string;
}

export const Header:React.FC<Props> = ({ baseAngle, baseColor }) => {
    const imageBackground = generateLinearGradient(baseColor, baseAngle);

    return (
        <div className={'header'} style={{backgroundImage: imageBackground}}>
            <div>Kevin Tarwater</div>
            <DesignWidget />
        </div>
    );
};
