import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes } from 'react-router-dom';
import './index.scss';
import MainPage from './pages/main';
import { Route } from 'react-router';
import Full from './pages/full';
import CustomHeader from './pages/customHeader';

const container = document.getElementById('root')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/full'} element={<Full />} />
        <Route path={'/custom'} element={<CustomHeader />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
