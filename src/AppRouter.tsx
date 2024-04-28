import { Form, Hero } from '@/pages';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/ahorra" element={<Form />} />
        </Routes>
    );
};
