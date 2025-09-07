import React from 'react';
import './HistoryPage.css';

function HistoryPage() {
  return (
    <div className="history-container">
      <h1>History of Tarot</h1>
      
      <p>
        The history of the tarot reveals its origins as a 15th-century Italian card game before its reinvention as a tool for occult and divinatory practices centuries later. Early decks were hand-painted for wealthy patrons, and the modern association with fortune-telling was a much later development.
      </p>

      <h2>The Invention and Evolution as a Game</h2>
      <ul className="bordered-list">
        <li><strong>Italian origins (mid-15th century):</strong> The tarot deck was invented in Northern Italy, likely between 1440 and 1450. It was originally known as <em>carte da trionfi</em> (triumph cards) and was used for playing a trick-taking game called <em>tarocchi</em>, similar to bridge.</li>
        <li><strong>Added cards:</strong> Early tarot decks expanded the standard four-suited pack by adding 21 allegorically illustrated trump cards (trionfi) and a special card called <em>il matto</em> (the fool).</li>
        <li><strong>Early decks:</strong> The oldest surviving cards are part of the mid-15th century hand-painted Visconti-Sforza deck, created for the Duke of Milan.</li>
        <li><strong>Spread across Europe:</strong> The game of tarot spread to France and Switzerland during the Italian Wars. A version known as the Tarot of Marseilles became prominent in France during the 17th century. The game remains popular in many parts of Europe today.</li>
      </ul>

      <h2>The Rise of Esoteric and Divinatory Use</h2>
      <ul className="bordered-list">
        <li><strong>18th-century occultism:</strong> The practice of using tarot for divination did not emerge until the late 18th century in France. This shift was influenced by a broader fascination with esotericism that was popular during the Age of Enlightenment.</li>
        <li><strong>Egyptian theories:</strong> In 1781, French clergyman Antoine Court de Gébelin falsely theorized that the cards originated from an ancient Egyptian "Book of Thoth". This romantic but inaccurate theory became widely believed and cemented the tarot's mystical reputation.</li>
        <li><strong>Standardized decks:</strong> French occultist Jean-Baptiste Alliette (Etteilla) published the first guide to tarot card reading in the 1780s and was the first to create a deck specifically designed for divination.</li>
        <li><strong>Golden Dawn and Rider-Waite-Smith:</strong> A significant milestone occurred with the Hermetic Order of the Golden Dawn, an occult society that developed new interpretations for the cards. As a member, Arthur Edward Waite commissioned artist Pamela Colman Smith to create the iconic Rider-Waite-Smith deck, first published in 1909. This deck was groundbreaking because it was the first to feature symbolic imagery on all 78 cards, not just the Major Arcana.</li>
      </ul>
      
      <h2>Modern Tarot</h2>
      <ul className="bordered-list">
        <li><strong>The 1970s revival:</strong> A resurgence of interest in tarot began in the 1970s, fueled by the New Age movement. The focus expanded from fortune-telling to personal growth, self-reflection, and psychological archetypes.</li>
        <li><strong>Contemporary interpretations:</strong> Today, the tarot is widely used as a tool for personal introspection and spiritual exploration, with an enormous variety of artistic decks available.</li>
      </ul>

      {/* +++ ADDED SECTION +++ */}
      <hr className="section-divider" />
      <h2>Major & Minor Arcana Explained</h2>

      <h3>The Two Pillars of the Tarot: A Journey Through the Major and Minor Arcana</h3>
      <p>
        Welcome, seeker, to the intricate, whispering world of the Tarot. The cards before you are not mere painted images; they are a profound, symbolic language, a map to the human experience. To truly understand this language, one must first grasp its fundamental structure, a duality that echoes the very nature of existence: the Major and Minor Arcana. These two sets of cards, distinct yet inseparable, form the complete deck, offering a holistic view of life's grand narratives and its subtle, everyday realities.
      </p>

      <h3>The Major Arcana: The Cosmic Blueprint</h3>
      <p>
        The Major Arcana, also known as the Trump cards, are the heart and soul of the deck. Numbering 22 cards, from The Fool (0) to The World (21), they represent the major life lessons, archetypes, and spiritual milestones on our soul's journey. These cards speak to the fundamental, universal forces that shape our destiny. They are the macrocosm of human experience.
      </p>
      <p>
        Each Major Arcana card is a powerful archetype, a character in a great cosmic play. The Fool is the eternal traveler, embarking on a quest of self-discovery. The Magician is the master of manifestation, the High Priestess the keeper of hidden knowledge. The Lovers speak of choice and union, while The Tower signifies sudden, transformative upheaval. These cards are not about simple events; they are about the why behind the events. They represent the profound shifts in consciousness, the spiritual tests, and the inevitable cycles of growth and change that all souls must navigate.
      </p>
      <p>
        When a Major Arcana card appears in a reading, it is a signpost. It is a whisper from the universe that a significant, transformative energy is at play. It indicates a powerful lesson being learned, a major life path being chosen, or a karmic force being activated. Their presence commands our attention, urging us to look beyond the mundane and consider the deeper, spiritual significance of our circumstances. They are the arias in the symphony of our lives, the moments of great dramatic revelation.
      </p>

      <h3>The Minor Arcana: The Tapestry of Daily Life</h3>
      <p>
        In contrast to the grand scale of the Major Arcana, the Minor Arcana charts the more terrestrial landscape of our lives. Numbering 56 cards, they are divided into four suits: Wands, Cups, Swords, and Pentacles. Each suit contains 14 cards—10 numbered cards (from Ace to Ten) and four court cards (Page, Knight, Queen, and King).
      </p>
      <p>
        The Minor Arcana represents the microcosm of human experience. They are the details, the emotions, the thoughts, and the actions that make up our day-to-day existence. If the Major Arcana is the script of the play, the Minor Arcana are the specific lines and actions of the actors on a given day.
      </p>
      <ul>
        <li><strong>Wands:</strong> The suit of fire, representing our passion, creativity, will, and drive. Wands speak to career, ambition, inspiration, and new projects. A Wands card in a reading often signifies a burst of energy or a call to action.</li>
        <li><strong>Cups:</strong> The suit of water, representing our emotions, relationships, intuition, and love. Cups cards reveal our feelings, our connections with others, and our spiritual or emotional fulfillment. They can speak of joy, sorrow, heartbreak, or deep compassion.</li>
        <li><strong>Swords:</strong> The suit of air, representing our intellect, thoughts, logic, and challenges. Swords cards often deal with communication, truth, conflict, and difficult decisions. They cut through illusion to reveal the raw truth of a situation.</li>
        <li><strong>Pentacles:</strong> The suit of earth, representing our physical world, finances, career, health, and security. Pentacles cards address matters of material possessions, abundance, grounding, and the practical application of our ideas.</li>
      </ul>
      <p>
        The Minor Arcana tells a story within each suit. The journey from the Ace to the Ten is a narrative of progression, from the pure, nascent energy of the Ace to the culmination or completion of a cycle at the Ten. The court cards—the Page, Knight, Queen, and King—represent personalities or stages of development within that suit's energy, offering a nuanced view of how we embody and express those qualities.
      </p>

      <h3>The Synergy: How They Work Together</h3>
      <p>
        A truly profound Tarot reading is one where the Major and Minor Arcana are read in concert. They are not separate systems but two halves of a single, complete whole.
      </p>
      <p>
        Imagine a reading for a client who is considering a career change. A Major Arcana card like The Chariot might appear, signaling a powerful drive, ambition, and the need for self-control on this journey. This is the overarching theme, the grand lesson. Alongside it, a Minor Arcana card like the Five of Pentacles might also appear, revealing the immediate, tangible fear of financial loss or insecurity that is causing hesitation. Another card, perhaps the Two of Wands, might show the specific choice between two paths that needs to be made.
      </p>
      <p>
        The Major Arcana gives the context, the meaning behind the struggle. It says, "This is not just a job change; this is a powerful, spiritual test of your will and direction." The Minor Arcana gives the details and the texture of that struggle. It says, "The specific challenge is a fear of poverty, and the decision you need to make is between these two specific opportunities."
      </p>
      <p>
        The Minor Arcana without the Major is a story without a soul—a list of events without a deeper meaning. The Major Arcana without the Minor is a soul without a body—a grand cosmic lesson that lacks practical, grounded application in our daily lives.
      </p>
      <p>
        To truly read the Tarot is to see this elegant interplay, to weave the threads of the major arcana's archetypal drama with the minor arcana's daily narrative. It is to recognize that our most mundane challenges are often opportunities for profound spiritual growth, and that our greatest moments of transformation are often made up of a series of small, deliberate choices.
      </p>
      <p>
        <strong>Embrace both pillars of the deck.</strong> Listen to the whispers of the universe in the Major Arcana, and ground those messages in the practical lessons of the Minor. For in this sacred conversation between the macrocosm and the microcosm, the true wisdom of the Tarot is revealed.
      </p>
    </div>
  );
}

export default HistoryPage;