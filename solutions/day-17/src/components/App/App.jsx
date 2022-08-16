import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import styles from './App.module.css';

import NavBar from '@/components/NavBar';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Footer from '@/layouts/Footer';

const App = () => {
    return (
        <Router>
            <div className={styles.app}>
                <NavBar />
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;