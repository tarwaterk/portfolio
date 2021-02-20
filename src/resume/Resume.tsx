import React from 'react';
import { ExpItem } from '../expItem/ExpItem';
import './resume.css';
import { expItems } from '../constants/resume';
import { generateLinearGradient } from '../utils/color';

interface Props {
    baseAngle: number;
    baseColor: string;
}

export const Resume:React.FC<Props> = ({ baseAngle, baseColor }) => {
    const backgroundImage = generateLinearGradient(baseColor, baseAngle, 2);
    return (
        <>
            <div className={'resume__intro-summary'}>Software engineer with 5 years experience mostly in front-end development.</div>
            <div className={'resume__experience-list'}>
                {
                    expItems.map((item, index) => {
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
