import React, { ChangeEvent } from 'react';

interface Props {
    onColorUpdate: (newColor: any) => void;
}

export const ColorInput: React.FC<Props> = ({ onColorUpdate }) => {
    const onInputChange = (onUpdate: (newColor: any) => void) => (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target) {
            onUpdate(e.target.value);
        }
    };

    return (
        <div>
            <div>Select Color:</div>
            <input type={'color'} onChange={onInputChange(onColorUpdate)} />
        </div>
    )
};
