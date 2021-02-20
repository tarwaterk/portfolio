import React from 'react';
import './designWidget.css';
import { AngleInput } from '../angleInput/AngleInput';
import { ColorInput } from '../colorInput/ColorInput';

interface Props {
    onAngleUpdate: (newAngle: number) => void;
    onColorUpdate: (newColor: any) => void;
}

export const DesignWidget: React.FC<Props> = ({ onAngleUpdate, onColorUpdate }) => {
    return (
        <div className={'design-widget'}>
            <AngleInput onAngleUpdate={onAngleUpdate} />
            <ColorInput onColorUpdate={onColorUpdate} />
        </div>
    );
};
