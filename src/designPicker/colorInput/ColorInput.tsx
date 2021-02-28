import React, { ChangeEvent } from 'react';

interface Props {
    className: string;
    onColorUpdate?: (newColor: any) => void;
}

export const ColorInput: React.FC<Props> = ({ className, onColorUpdate }) => {
    const onInputChange = (onUpdate: (newColor: any) => void) => (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target) {
            onUpdate(e.target.value);
        }
    };

    return (
        onColorUpdate ?
        <div className={className}>
            <div>Select Color:</div>
            <input type={'color'} onChange={onInputChange(onColorUpdate)} />
        </div>
        :
        null
    )
};
