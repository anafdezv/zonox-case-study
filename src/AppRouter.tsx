import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Hero } from './pages/Hero';

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Hero />} />
        </Routes>
    );
};
