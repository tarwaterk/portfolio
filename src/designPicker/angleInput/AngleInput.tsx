import React from 'react';
import { Slider } from '@material-ui/core';

interface Props {
    className: string;
    onAngleUpdate: (newAngle: number) => void;
}

export const AngleInput: React.FC<Props> = ({ className, onAngleUpdate }) => {
    const onInputChange = (onUpdate: (newAngle: number) => void) => (e: any, value: number | number[]) => {
        if (typeof value === 'number') {
            onUpdate(value % 360);
        }
    };

    return (
        <div className={className}>
            <div>Select Angle:</div>
            <Slider
                defaultValue={15}
                min={0}
                max={360}
                step={1}
                onChange={onInputChange(onAngleUpdate)}
            />
        </div>
    );
};
