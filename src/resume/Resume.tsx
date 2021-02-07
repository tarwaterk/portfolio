import React from 'react';
import { ExpItem } from '../expItem/ExpItem';
import './resume.css';
import { expItems } from '../constants/resume';

export const Resume:React.FC = () => {
    return (
        <>
            <div className={'resume__intro-summary'}>Software engineer with 5 years experience mostly in front-end development.</div>
            <div className={'resume__experience-list'}>
                {
                    expItems.map((item) => {
                        return (
                            <ExpItem
                                reverse={item.reverse}
                                employer={item.employer}
                                title={item.title}
                                startDate={item.startDate}
                                endDate={item.endDate}
                                bullets={item.bullets}
                            />
                        );
                    })
                }
            </div>
        </>
    );
};
