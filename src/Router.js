import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FootField from './components/footField/FootField';
import Navbar from './components/Header/Navbar';
import Players from './components/Players/Players';

const Router = () => {
    return (
        <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path="/players" element={<Players />} />
                <Route path="/footfield" element={<FootField />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;