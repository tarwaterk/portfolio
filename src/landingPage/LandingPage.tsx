import React, { useEffect, useState } from 'react';
import { Header } from '../header/Header';
import { Resume } from '../resume/Resume';
import { DesignWidgetContextProvider } from '../designPicker/designWidgetContext/DesignWidgetContextProvider';
import { DesignWidgetContext } from '../designPicker/designWidgetContext/DesignWidgetContext';

export const LandingPage:React.FC = () => {
    return (
        <DesignWidgetContextProvider>
            {
                <DesignWidgetContext.Consumer>
                    {
                        dwContextValue => (
                            <>
                                <Header baseAngle={dwContextValue.baseAngle} baseColor={dwContextValue.baseColor} />
                                <Resume />
                            </>
                        )
                    }
                </DesignWidgetContext.Consumer>
            }
        </DesignWidgetContextProvider>
    );
};
