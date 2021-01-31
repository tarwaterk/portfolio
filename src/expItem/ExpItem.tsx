import React from 'react';
import './expItem.css';

export const ExpItem:React.FC = () => {
    return (
        <div className={'expItem'}>
            <div className={'expItem__bullet-list'}>
                <div>Company Name</div>
                <div>Job Title</div>
                <div>Date Range</div>
                <div>bulleted list of experience</div>
            </div>
            <div className={'expItem__image'}></div>
        </div>
    );
};
