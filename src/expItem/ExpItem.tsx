import React from 'react';
import './expItem.css';

interface Props {
    reverse?: boolean;
    employer: string;
    title: string;
    startDate: string;
    endDate: string;
    bullets: string[];
}

export const ExpItem:React.FC<Props> = ({
    reverse,
    employer,
    title,
    startDate,
    endDate,
    bullets
}) => {
    const imageBackground = {
        backgroundImage: "linear-gradient(225deg, rgba(47,150,57,.8), rgba(0,255,0,0) 70.71%), linear-gradient(45deg, rgba(47,150,130,.8), rgba(0,255,0,0) 70.71%)"
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
                        bullets.map((item) => {
                            return <li>{item}</li>;
                        })
                    }
                </ul>
            </div>
            <div className={'expItem__image'} style={imageBackground}></div>
        </div>
    );
};
