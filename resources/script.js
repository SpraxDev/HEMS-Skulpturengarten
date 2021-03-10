// noinspection JSUnusedGlobalSymbols
let currActiveCard;

function onBtnClick(btn) {
  if (currActiveCard) {
    hideCard(currActiveCard);
  }

  if (btn) {
    const card = document.getElementById(btn.getAttribute('data-target'));

    if (currActiveCard !== card) {
      currActiveCard = card;

      showCard(btn, card);
    } else {
      currActiveCard = null;
    }
  } else {
    currActiveCard = null;
  }
}

// noinspection JSUnusedGlobalSymbols
function hideCard(card) {
  card.classList.add('d-none');

  card.style.zIndex = 'auto';

  card.querySelectorAll('video').forEach(e => e.pause());
  card.querySelectorAll('audio').forEach(e => e.pause());
}

// noinspection JSUnusedGlobalSymbols
function showCard(btn, card) {
  card.classList.remove('d-none');

  card.style.top = btn.style.top;
  card.style.left = `calc(${btn.style.left} + ${btn.offsetWidth}px + 5px)`;
  card.style.zIndex = '5';
}