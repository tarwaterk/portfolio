import React from 'react';
import { Header } from '../header/Header';
import { Resume } from '../resume/Resume';

export const LandingPage:React.FC = () => {
    return (
        <>
            <Header />
            <Resume />
        </>
    );
};
