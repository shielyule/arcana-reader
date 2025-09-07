import React, { useState, useMemo } from 'react';
import fullDeck from './data/deck.js';

// MUI Core Components
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';

const getInitialCards = () => {
  if (!Array.isArray(fullDeck) || fullDeck.length === 0) {
    console.error("Failed to load the deck. Check the data file.");
    return [];
  }
  const shuffledDeck = [...fullDeck].sort(() => Math.random() - 0.5);
  return shuffledDeck.slice(0, 3);
};

const cardBackImage = '/assets/cards/Roses_and_Lilies_back.jpg';

function Reading() {
  const [cards, setCards] = useState(getInitialCards());
  const flippedCount = useMemo(() => cards.filter(card => card.isFlipped).length, [cards]);

  const handleCardClick = (clickedId) => {
    const targetCard = cards.find(card => card.id === clickedId);
    if (targetCard && targetCard.isFlipped) return;
    setCards(currentCards =>
      currentCards.map(card =>
        card.id === clickedId ? { ...card, isFlipped: true } : card
      )
    );
  };

  if (!cards || cards.length === 0) {
    return (
      <Typography color="error">
        Could not load cards. Please check the console.
      </Typography>
    );
  }

  return (
    <Box sx={{
      width: '100%', minHeight: '80vh', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      py: 4, perspective: '1200px'
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 4,
        mb: 5,
        px: 2
      }}>
        {cards.map((card) => (
          <Box key={card.id}
            onClick={() => handleCardClick(card.id)}
            sx={{
              cursor: 'pointer',
              width: '240px',
            }}
          >
            <Box sx={{
              position: 'relative', width: '100%', paddingBottom: '260%',
              transition: 'transform 0.8s',
              transformStyle: 'preserve-3d',
              transform: card.isFlipped ? 'rotateY(180deg)' : 'none',
            }}>
              <Paper elevation={0} sx={{
                position: 'absolute', width: '100%', height: '100%',
                backfaceVisibility: 'hidden',
                backgroundImage: `url(${cardBackImage})`,
                // === CHANGED === Ensures the whole image is visible and centered.
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: 0
              }} />
              <Paper elevation={0} sx={{
                position: 'absolute', width: '100%', height: '100%',
                backfaceVisibility: 'hidden', transform: 'rotateY(180deg)',
                backgroundImage: `url(${card.frontImage})`,
                // === CHANGED === Ensures the whole image is visible and centered.
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: 0
              }} />
            </Box>
          </Box>
        ))}
      </Box>
      
      <Fade in={flippedCount === 3} timeout={1500}>
        <Box sx={{
          textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)',
          padding: { xs: '1rem', md: '1.5rem 2rem' },
          borderRadius: '10px', border: '1px solid #444', maxWidth: '80vw',
        }}>
          <Typography variant="h5" component="h3" sx={{ color: '#a9a9d4', mb: 1 }}>
            The Reading
          </Typography>
          <Typography variant="body1">
            The interpretation of your cards.
          </Typography>
        </Box>
      </Fade>
    </Box>
  );
}

export default Reading;