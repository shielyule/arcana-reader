import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const userQuestion = location.state?.userQuestion;

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
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      py: 4,
      perspective: '1200px'
    }}>
      {userQuestion && (
        <Box sx={{ textAlign: 'center', mb: 4, maxWidth: '600px' }}>
          <Typography sx={{ fontFamily: 'Great Vibes', color: '#a9a9d4', mb: 1, fontSize: '2.4rem' }}>
            Your Question:
          </Typography>
          <Typography variant="h6">
            "{userQuestion}"
          </Typography>
        </Box>
      )}

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: 4,
        mb: 5,
        px: 2
      }}>
        {cards.map((card) => (
          <Box key={card.id} sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '170px',
          }}>
            <Box sx={{
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Fade in={card.isFlipped} timeout={1000}>
                <Typography sx={{
                  textAlign: 'center',
                  fontFamily: 'Great Vibes, cursive',
                  fontSize: '1.6rem',
                  color: '#e0e0e0',
                }}>
                  {card.name}
                </Typography>
              </Fade>
            </Box>

            <Box
              onClick={() => handleCardClick(card.id)}
              sx={{
                cursor: 'pointer',
                width: '100%',
              }}
            >
              <Box sx={{
                position: 'relative', width: '100%', paddingBottom: '190%',
                transition: 'transform 0.8s',
                transformStyle: 'preserve-3d',
                transform: card.isFlipped ? 'rotateY(180deg)' : 'none',
              }}>
                <Paper elevation={0} square sx={{
                  backgroundColor: 'transparent',
                  position: 'absolute', width: '100%', height: '100%',
                  backfaceVisibility: 'hidden',
                  backgroundImage: `url(${cardBackImage})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }} />
                <Paper elevation={0} square sx={{
                  backgroundColor: 'transparent',
                  position: 'absolute', width: '100%', height: '100%',
                  backfaceVisibility: 'hidden', transform: 'rotateY(180deg)',
                  backgroundImage: `url(${card.frontImage})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }} />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      
      <Box sx={{ minHeight: '120px', display: 'flex', alignItems: 'center' }}>
        <Fade in={flippedCount < 3} timeout={300} unmountOnExit>
          {/* === CHANGED === Added width: '100%' to allow centering. */}
          <Typography sx={{ color: '#a9a9d4', fontStyle: 'italic', textAlign: 'center', width: '100%' }}>
            Click the cards to turn them over
          </Typography>
        </Fade>

        <Fade in={flippedCount === 3} timeout={1500}>
          <Box sx={{
            textAlign: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)',
            padding: { xs: '1rem', md: '1.5rem 2rem' },
            borderRadius: '10px', border: '1px solid #444', maxWidth: '80vw',
          }}>
            <Typography variant="h5" component="h3" sx={{ fontFamily: 'Uncial Antiqua', color: '#a9a9d4', mb: 1 }}>
              The Reading
            </Typography>
            <Typography variant="body1">
              The interpretation of your cards.
            </Typography>
          </Box>
        </Fade>
      </Box>
    </Box>
  );
}

export default Reading;