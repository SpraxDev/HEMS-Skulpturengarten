let fullscreenBtn;
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

function hideCard(card) {
  card.classList.add('d-none');

  card.style.zIndex = 'auto';

  card.querySelectorAll('video').forEach(e => e.pause());
  card.querySelectorAll('audio').forEach(e => e.pause());
}

function showCard(btn, card) {
  card.classList.remove('d-none');

  card.style.top = btn.style.top;
  card.style.left = `calc(${btn.style.left} + ${btn.offsetWidth}px + 5px)`;
  card.style.zIndex = '5';
}

function toggleFullscreen(elem) {
  fullscreenBtn = elem;

  if (screenfull.isEnabled) {
    if (screenfull.isFullscreen) {
      screenfull.exit();
    } else {
      screenfull.request(document.getElementById('imgDiv'));
    }
  }
}

window.addEventListener('load', () => {
  if (screenfull) {
    if (screenfull.isEnabled) {
      screenfull.on('change', () => {
        const imgNode = document.getElementById('imgNode');

        if (screenfull.isFullscreen) {
          imgNode.src = 'img/bg_hd.png';
        } else {
          imgNode.src = 'img/bg.png';
        }

        if (fullscreenBtn) {
          if (screenfull.isFullscreen) {
            fullscreenBtn.src = 'img/feathericons/minimize-2.svg';
          } else {
            fullscreenBtn.src = 'img/feathericons/maximize-2.svg';
          }
        }
      });

      console.info('Successfully initialized fullscreen capabilities');
    } else {
      console.info('Full Screen API is not supported by your browser');
    }
  } else {
    console.error(`Failed to load 'screenfull' - Fullscreen is not available`);
  }
});