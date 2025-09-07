// This function converts a filename like "the-fool.png" into "The Fool"
const formatCardName = (filename) => {
    return filename
      .replace('.png', '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  const filenames = [
    'the-fool.png', 'the-magician.png', 'the-high-priestess.png', 'the-empress.png', 
    'the-emperor.png', 'the-hierophant.png', 'the-lovers.png', 'the-chariot.png', 
    'strength.png', 'the-hermit.png', 'wheel-of-fortune.png', 'justice.png', 
    'the-hanged-man.png', 'death.png', 'temperance.png', 'the-devil.png', 'the-tower.png', 
    'the-star.png', 'the-moon.png', 'the-sun.png', 'judgement.png', 'the-world.png',
    'ace-of-wands.png', 'two-of-wands.png', 'three-of-wands.png', 'four-of-wands.png', 
    'five-of-wands.png', 'six-of-wands.png', 'seven-of-wands.png', 'eight-of-wands.png', 
    'nine-of-wands.png', 'ten-of-wands.png', 'page-of-wands.png', 'knight-of-wands.png', 
    'queen-of-wands.png', 'king-of-wands.png',
    'ace-of-cups.png', 'two-of-cups.png', 'three-of-cups.png', 'four-of-cups.png', 
    'five-of-cups.png', 'six-of-cups.png', 'seven-of-cups.png', 'eight-of-cups.png', 
    'nine-of-cups.png', 'ten-of-cups.png', 'page-of-cups.png', 'knight-of-cups.png', 
    'queen-of-cups.png', 'king-of-cups.png',
    'ace-of-swords.png', 'two-of-swords.png', 'three-of-swords.png', 'four-of-swords.png', 
    'five-of-swords.png', 'six-of-swords.png', 'seven-of-swords.png', 'eight-of-swords.png', 
    'nine-of-swords.png', 'ten-of-swords.png', 'page-of-swords.png', 'knight-of-swords.png', 
    'queen-of-swords.png', 'king-of-swords.png',
    'ace-of-pentacles.png', 'two-of-pentacles.png', 'three-of-pentacles.png', 'four-of-pentacles.png', 
    'five-of-pentacles.png', 'six-of-pentacles.png', 'seven-of-pentacles.png', 'eight-of-pentacles.png', 
    'nine-of-pentacles.png', 'ten-of-pentacles.png', 'page-of-pentacles.png', 'knight-of-pentacles.png', 
    'queen-of-pentacles.png', 'king-of-pentacles.png'
  ];
  
  const fullDeck = filenames.map((file, index) => ({
    id: index + 1,
    name: formatCardName(file),
    isFlipped: false,
    frontImage: `/assets/cards/${file}`,
  }));
  
  export default fullDeck;