const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 5,
  health: 100,
  image: 'https://andejuli.github.io/wdd131/character_card/snortleblat.webp',
  
  attacked() {
    if (this.health >= 20) {
      this.health -= 20;
      return "Snortleblat was attacked and lost 20 health!";
    } else {
      this.health = 0;
      return "Snortleblat has died.";
    }
  },

  levelUp() {
    this.level += 1;
    this.health += 20;
    return "Snortleblat leveled up and gained 20 health!";
  }
};

// Get DOM elements
const nameEl = document.querySelector('.name');
const classEl = document.getElementById('class');
const levelEl = document.getElementById('level');
const healthEl = document.getElementById('health');
const imageEl = document.querySelector('.image');
const logEl = document.getElementById('log');

const attackedBtn = document.getElementById('attacked');
const levelUpBtn = document.getElementById('levelup');

// Update DOM with character properties
function updateDisplay(message = "") {
  nameEl.textContent = character.name;
  classEl.textContent = character.class;
  levelEl.textContent = character.level;
  healthEl.textContent = character.health;
  imageEl.src = character.image;
  imageEl.alt = character.name;
  logEl.textContent = message;
}

// Event listeners
attackedBtn.addEventListener('click', () => {
  const message = character.attacked();
  updateDisplay(message);
});

levelUpBtn.addEventListener('click', () => {
  const message = character.levelUp();
  updateDisplay(message);
});

// Initial display
updateDisplay();

