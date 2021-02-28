import React, { ChangeEvent } from 'react';
import { DesignWidgetContext } from '../designWidgetContext/DesignWidgetContext';

interface Props {
    className: string;
}

export const ColorInput: React.FC<Props> = ({ className }) => {
    const { setBaseColor } = React.useContext(DesignWidgetContext);
    const onInputChange = (onUpdate?: (newColor: any) => void) => (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target && onUpdate) {
            onUpdate(e.target.value);
        }
    };

    return (
        <div className={className}>
            <div>Select Color:</div>
            <input type={'color'} onChange={onInputChange(setBaseColor)} />
        </div>
    )
};
