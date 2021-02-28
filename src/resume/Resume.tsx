import React from 'react';
import { ExpItem } from '../expItem/ExpItem';
import './resume.css';
import { EXP_SUMMARY, EXP_TECH, EXP_ITEMS } from '../constants/resume';
import { adjustColor, generateLinearGradient } from '../utils/color/color';
import { DesignWidgetContext } from '../designPicker/designWidgetContext/DesignWidgetContext';

export const Resume:React.FC = () => {
    return (
        <>
            <div className={'resume__top-section'}>
                <div className={'resume__intro-summary'}>{EXP_SUMMARY}</div>
                
                <div className={'resume__tech'}>
                    <ul>
                        {
                            EXP_TECH.map((techItem, index) => {
                                return (
                                    <li key={`tech-item-${index}`}>{techItem}</li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
            <DesignWidgetContext.Consumer>
                {
                    dwContextValue => {
                        let baseColor = adjustColor(dwContextValue.baseColor);
                        return (
                            <div className={'resume__experience-list'}>
                                {
                                    EXP_ITEMS.map((item, index) => {
                                        const baseAngle = dwContextValue.baseAngle + ((index % 2) * 180);
                                        baseColor = adjustColor(baseColor, 10);
                                        const backgroundImage = generateLinearGradient(baseColor, baseAngle, 2);
                                        return (
                                            <ExpItem
                                                key={`expItem-${index}`}
                                                reverse={item.reverse}
                                                employer={item.employer}
                                                title={item.title}
                                                startDate={item.startDate}
                                                endDate={item.endDate}
                                                bullets={item.bullets}
                                                backgroundImage={backgroundImage}
                                            />
                                        );
                                    })
                                }
                            </div>
                        );
                    }
                }
            </DesignWidgetContext.Consumer>
        </>
    );
};
