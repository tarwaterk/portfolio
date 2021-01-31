import React from 'react';
import { Header } from '../header/Header';
import { Navbar } from '../navbar/Navbar';
import { Resume } from '../resume/Resume';

export const LandingPage:React.FC = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Resume />
        </>
    );
};
