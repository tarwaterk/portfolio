import React, { ChangeEvent } from 'react';

interface Props {
    onAngleUpdate: (newAngle: number) => void;
}

export const AngleInput: React.FC<Props> = ({ onAngleUpdate }) => {
    const onInputChange = (onUpdate: (newAngle: number) => void) => (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target) {
            onUpdate(parseInt(e.target.value) % 360);
        }
    };

    return (
        <div>
            <div>Base Angle (in degrees):</div>
            <input type={'number'} onChange={onInputChange(onAngleUpdate)}/>
        </div>
    );
};
