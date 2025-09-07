// === CHANGED === Importing useState and TextField
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  // +++ ADDED +++ State to hold the user's question
  const [question, setQuestion] = useState('');

  const handleBeginReading = () => {
    // === CHANGED === We now pass the user's question to the reading page
    navigate('/reading', { state: { userQuestion: question } });
  };

  return (
    <header className="home-header">
      <h1>Arcana Reader</h1>
      <h2>Your Mystical Tarot Reader</h2>
      
      {/* === CHANGED === Updated the main text */}
      <p>
        What would you like the Tarot Deck to consult the universe about today?
      </p>

      {/* +++ ADDED +++ Text field for user input */}
      <TextField
        className="question-field"
        multiline
        rows={3}
        variant="outlined"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Type your question here..."
        inputProps={{ maxLength: 255 }}
        sx={{
          width: '100%',
          maxWidth: '500px',
          mb: 1,
        }}
      />
      
      
      <p className="suggestions-text">
        Suggestions: Career, Love Life, Family, Relationships, Money etc.
      </p>

      <button onClick={handleBeginReading}>
        Begin a Reading
      </button>
    </header>
  );
}

export default HomePage;