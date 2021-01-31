import React from 'react';
import { ExpItem } from '../expItem/ExpItem';
import './resume.css';

export const Resume:React.FC = () => {
    return (
        <>
            <div className={'resume__intro-summary'}>SUMMARY</div>
            <div className={'resume__experience-list'}>
                <ExpItem />
            </div>
        </>
    );
};
