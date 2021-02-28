import React from 'react';
import { Slider } from '@material-ui/core';
import { DesignWidgetContext } from '../designWidgetContext/DesignWidgetContext';

interface Props {
    className: string;
}

export const AngleInput: React.FC<Props> = ({ className }) => {
    const { setBaseAngle } = React.useContext(DesignWidgetContext);
    const onInputChange = (onUpdate?: (newAngle: number) => void) => (e: any, value: number | number[]) => {
        if (typeof value === 'number' && onUpdate) {
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
                onChange={onInputChange(setBaseAngle)}
            />
        </div>
    );
};
