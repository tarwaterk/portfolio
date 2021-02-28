import React from 'react';
import './designWidget.css';
import { AngleInput } from '../angleInput/AngleInput';
import { ColorInput } from '../colorInput/ColorInput';

export const DesignWidget: React.FC = () => {
    return (
        <div className={'design-widget'}>
            <AngleInput className={'design-widget__angle-input'} />
            <ColorInput className={'design-widget__color-input'} />
        </div>
    );
};
