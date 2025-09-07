import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './HomePage.jsx';
import Reading from './Reading.jsx';
import ReadingsPage from './pages/ReadingsPage.jsx';
import DecksPage from './pages/DecksPage.jsx';
import HistoryPage from './pages/HistoryPage.jsx';
import './index.css';

// This is the "map" of your application
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // App.jsx is now the main layout
    children: [
      {
        index: true, // This is the default page at '/'
        element: <HomePage />,
      },
      {
        path: 'reading', // The path for the card reading screen
        element: <Reading />,
      },
      {
        path: 'readings',
        element: <ReadingsPage />,
      },
      {
        path: 'decks',
        element: <DecksPage />,
      },
      {
        path: 'history',
        element: <HistoryPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);