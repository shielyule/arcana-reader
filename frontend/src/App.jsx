import React from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet
import CustomAppBar from './components/AppBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomAppBar />
      {/* === CHANGED === Wrapped Outlet in a main tag for styling */}
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;