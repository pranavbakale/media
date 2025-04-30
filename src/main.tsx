import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import IndieFilms from './pages/IndieFilms.tsx';
import FastChannels from './pages/FastChannels.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/indiefilms" element={<IndieFilms />} />
        <Route path="/fastchannels" element={<FastChannels />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
