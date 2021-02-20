import React from 'react';
import './expItem.css';

interface Props {
    reverse?: boolean;
    employer: string;
    title: string;
    startDate: string;
    endDate: string;
    bullets: string[];
    backgroundImage: string;
}

export const ExpItem:React.FC<Props> = ({
    reverse,
    employer,
    title,
    startDate,
    endDate,
    bullets,
    backgroundImage
}) => {
    const imageBackground = {
        backgroundImage: backgroundImage
    }
    const expItemDirection = {
        flexDirection: reverse ? "row-reverse" as "row-reverse" : "row" as "row"
    };
    return (
        <div className={'expItem'} style={expItemDirection}>
            <div className={'expItem__bullet-list'}>
                <div>{employer}</div>
                <div>{title}</div>
                <div>{`${startDate} - ${endDate || 'Present'}`}</div>
                <ul>
                    {
                        bullets.map((item, index) => {
                            return <li key={`expItem__bullet-${index}`}>{item}</li>;
                        })
                    }
                </ul>
            </div>
            <div className={'expItem__image'} style={imageBackground}></div>
        </div>
    );
};
