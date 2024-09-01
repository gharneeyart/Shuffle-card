// Define the deck of cards
// const deck = [
//     'Six of Spades', 'Eight of Spades', 'Six of Clubs', 'Nine of Hearts',
//     'Queen of Hearts', 'Seven of Clubs', 'Nine of Spades', 'King of Hearts',
//     'Three of Diamonds', 'Deuce of Clubs', 'Ace of Hearts', 'Ten of Spades',
//     'Four of Spades', 'Ace of Clubs', 'Seven of Diamonds', 'Four of Hearts',
//     'Three of Clubs', 'Deuce of Hearts', 'Five of Spades', 'Jack of Diamonds',
//     'King of Clubs', 'Ten of Hearts', 'Three of Hearts', 'Six of Diamonds',
//     'Queen of Clubs', 'Eight of Diamonds', 'Deuce of Diamonds', 'Ten of Diamonds',
//     'Three of Spades', 'King of Diamonds', 'Nine of Clubs', 'Six of Hearts',
//     'Ace of Spades', 'Four of Diamonds', 'Seven of Hearts', 'Eight of Clubs',
//     'Deuce of Spades', 'Eight of Hearts', 'Five of Hearts', 'Queen of Spades',
//     'Jack of Hearts', 'Seven of Spades', 'Four of Clubs', 'Nine of Diamonds',
//     'Ace of Diamonds', 'Queen of Diamonds', 'Five of Clubs', 'King of Spades',
//     'Five of Diamonds', 'Ten of Clubs', 'Jack of Spades', 'Jack of Clubs'
//   ];
  
//   // Function to shuffle the deck
//   function shuffleDeck() {
//     const shuffledDeck = [...deck];
//     for (let i = shuffledDeck.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
//     }
//     return shuffledDeck;
//   }
  
//   // Example usage
//   console.log(shuffleDeck());

// Define the deck of cards
const deck = [
  'Six of Spades', 'Eight of Spades', 'Six of Clubs', 'Nine of Hearts',
  'Queen of Hearts', 'Seven of Clubs', 'Nine of Spades', 'King of Hearts',
  'Three of Diamonds', 'Deuce of Clubs', 'Ace of Hearts', 'Ten of Spades',
  'Four of Spades', 'Ace of Clubs', 'Seven of Diamonds', 'Four of Hearts',
  'Three of Clubs', 'Deuce of Hearts', 'Five of Spades', 'Jack of Diamonds',
  'King of Clubs', 'Ten of Hearts', 'Three of Hearts', 'Six of Diamonds',
  'Queen of Clubs', 'Eight of Diamonds', 'Deuce of Diamonds', 'Ten of Diamonds',
  'Three of Spades', 'King of Diamonds', 'Nine of Clubs', 'Six of Hearts',
  'Ace of Spades', 'Four of Diamonds', 'Seven of Hearts', 'Eight of Clubs',
  'Deuce of Spades', 'Eight of Hearts', 'Five of Hearts', 'Queen of Spades',
  'Jack of Hearts', 'Seven of Spades', 'Four of Clubs', 'Nine of Diamonds',
  'Ace of Diamonds', 'Queen of Diamonds', 'Five of Clubs', 'King of Spades',
  'Five of Diamonds', 'Ten of Clubs', 'Jack of Spades', 'Jack of Clubs'
];

// Function to shuffle the deck
function shuffleDeck() {
  const shuffledDeck = [...deck];
  for (let i = shuffledDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }
  return shuffledDeck;
}

// Function to display the deck
function displayDeck(deck) {
  const deckContainer = document.getElementById('deckContainer');
  deckContainer.innerHTML = '';
  deck.forEach(card => {
      const cardElement = document.createElement('div');
      cardElement.className = 'card';
      cardElement.textContent = card;
      deckContainer.appendChild(cardElement);
  });
}

// Add event listener to the shuffle button
document.getElementById('shuffleButton').addEventListener('click', () => {
  const shuffledDeck = shuffleDeck();
  displayDeck(shuffledDeck);
});

// Initial display of the deck
displayDeck(deck);

  