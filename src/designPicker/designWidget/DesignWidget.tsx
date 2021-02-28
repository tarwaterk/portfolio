import React from 'react';
import './designWidget.css';
import { AngleInput } from '../angleInput/AngleInput';
import { ColorInput } from '../colorInput/ColorInput';
import { DesignWidgetContext } from '../designWidgetContext/DesignWidgetContext';

export const DesignWidget: React.FC = () => {
    return (
        <div className={'design-widget'}>
            <DesignWidgetContext.Consumer>
                {
                    dwContextValue => (
                        <>
                            <AngleInput className={'design-widget__angle-input'} onAngleUpdate={dwContextValue.setBaseAngle} />
                            <ColorInput className={'design-widget__color-input'} onColorUpdate={dwContextValue.setBaseColor} />
                        </>
                    )
                }
            </DesignWidgetContext.Consumer>
        </div>
    );
};
