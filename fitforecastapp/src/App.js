import React from 'react';
import MainPageSunny from './MainPageSunny';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClothesPage from './Clothes';
import WelcomePage from './WelcomePage';
import HydrationPage from './HydrationPage';
import RainPage  from './RainPage';
import BlogPage  from './Blog';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element ={<WelcomePage />} />
                <Route path='welcome' element ={<WelcomePage />} />
                <Route path="main" element={<MainPageSunny />} />
                <Route path="clothes" element={<ClothesPage />} />
                <Route path="hydration" element={<HydrationPage />} />
                <Route path="rain" element={<RainPage />} />
                <Route path="blog" element={<BlogPage />} />
            </Routes>
        </Router>
    );
}

export default App;