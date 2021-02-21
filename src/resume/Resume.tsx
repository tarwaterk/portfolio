import React from 'react';
import { ExpItem } from '../expItem/ExpItem';
import './resume.css';
import { EXP_SUMMARY, EXP_TECH, EXP_ITEMS } from '../constants/resume';
import { generateLinearGradient } from '../utils/color';

interface Props {
    baseAngle: number;
    baseColor: string;
}

export const Resume:React.FC<Props> = ({ baseAngle, baseColor }) => {
    const backgroundImage = generateLinearGradient(baseColor, baseAngle, 2);
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
            <div className={'resume__experience-list'}>
                {
                    EXP_ITEMS.map((item, index) => {
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
        </>
    );
};
