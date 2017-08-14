console.log("game up and running");

var cards = [
	{
	suit: "diamonds",
	rank: "queen",
	cardImage: "images/queen-of-diamonds.png",
	},
	{
	suit: "hearts",
	rank: "queen",
	cardImage: "images/queen-of-hearts.png",
	},
	{
	suit: "diamonds",
	rank: "king",
	cardImage: "images/king-of-diamonds.png",
	},
	{
	suit: "hearts",
	rank: "king",
	cardImage: "images/queen-of-diamonds.png",
	},
];

var cardsInPlay = [];

function checkForMatch(argument) {
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
      alert("You found a match!");
  } else {
      alert("Sorry, try again.");
  }
};


function flipCard() {
	var cardId = this.getAttribute('data-id')
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
    
    checkForMatch();
  }
};

function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement)

	}
};

createBoard();