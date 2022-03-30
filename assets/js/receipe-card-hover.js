const receipeCardSelector = document.querySelectorAll(
  '.js-receipe-card-selector > .list'
);

console.log(receipeCardSelector);

receipeCardSelector.forEach((element) =>
  element.addEventListener('click', changeReceipeCard)
);

function changeReceipeCard(event) {
  const target = event.target;

  // Get all the cards
  const cards = document.querySelectorAll('.receipe-card[data-receipe-name]');

  // hide all the cards
  cards.forEach((card) => (card.style.display = 'none'));

  // show the selected one
  const receipeTarget = target.dataset.receipeName;
  const targetCard = document.querySelector(
    `.receipe-card[data-receipe-name="${receipeTarget}"]`
  );

  targetCard.style.display = 'flex';

  // set the active state on selected one
  receipeCardSelector.forEach((cardSelector) =>
    cardSelector.classList.remove('listactive')
  );
  target.classList.toggle('listactive');

  console.log(event.target);
}
