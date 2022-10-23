import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './pages/Authentication/Authentication';
import Storage from './pages/Storage/Storage';
import Database from './pages/Database/Database';
import MachineLearning from './pages/MachineLearning/MachineLearning';
import Functions from './pages/Functions/Functions';
import Hosting from './pages/Hosting/Hosting';
import { ThemeProvider } from '@emotion/react';
import { dashboardTheme } from './DashboardTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="authentication" element={<Authentication />} />
          <Route path="database" element={<Database />} />
          <Route path="functions" element={<Functions />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="storage" element={<Storage />} />
        </Route>
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);
