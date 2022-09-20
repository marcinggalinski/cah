import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.styl';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
