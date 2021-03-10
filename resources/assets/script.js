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
  card.classList.remove('slideIn', 'slideOut');
  card.classList.add('slideOut');

  card.style.zIndex = 'auto';

  card.querySelectorAll('video').forEach(e => e.pause());
  card.querySelectorAll('audio').forEach(e => e.pause());
}

// noinspection JSUnusedGlobalSymbols
function showCard(btn, card) {
  card.classList.remove('slideIn', 'slideOut', 'd-none');
  card.classList.add('slideIn');

  card.style.top = btn.style.top;
  card.style.left = `calc(${btn.style.left} + ${btn.offsetWidth}px + 5px)`;
  card.style.zIndex = '5';
}

window.addEventListener('load', () => {
  document.querySelectorAll('.animated').forEach((elem) => {
    elem.addEventListener('animationend', () => {
      if (elem.classList.contains('slideOut')) {
        elem.classList.add('d-none');
        elem.classList.remove('slideOut');
      }
    });
  });
});