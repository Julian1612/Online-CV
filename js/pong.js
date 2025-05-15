// js/pong.js
let pongInterval;
function openPong() {
  openWindow('gameWindow');
  initPong();
}

function initPong() {
  clearInterval(pongInterval);
  const canvas = document.getElementById('pongCanvas');
  const ctx    = canvas.getContext('2d');

  // Grundgeschwindigkeit
  const baseSpeed = 2;
  let bvx = baseSpeed * (Math.random() < 0.5 ? 1 : -1);
  let bvy = baseSpeed * (Math.random() < 0.5 ? 1 : -1);
  let bx = canvas.width / 2;
  let by = canvas.height / 2;
  const radius = 5;

  // Paddles
  const ph = 40, pw = 5;
  let py = (canvas.height - ph) / 2;
  let oy = py;
  const paddleSpeed = 3;

  // Scores
  let scorePlayer = 0;
  let scoreAI = 0;

  // Input
  let up = false, down = false;
  window.onkeydown = e => {
    if (e.key === 'ArrowUp') up = true;
    if (e.key === 'ArrowDown') down = true;
  };
  window.onkeyup = e => {
    if (e.key === 'ArrowUp') up = false;
    if (e.key === 'ArrowDown') down = false;
  };

  function draw() {
    // Hintergrund
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Score anzeigen
    ctx.fillStyle = '#fff';
    ctx.font = '16px Courier';
    ctx.fillText(`${scorePlayer} : ${scoreAI}`, canvas.width / 2 - 20, 20);

    // Ball
    ctx.beginPath();
    ctx.arc(bx, by, radius, 0, Math.PI * 2);
    ctx.fill();

    // Paddles
    ctx.fillRect(0, py, pw, ph);
    ctx.fillRect(canvas.width - pw, oy, pw, ph);
  }

  function update() {
    // Ball bewegen
    bx += bvx;
    by += bvy;

    // Oben/Unten abprallen
    if (by - radius < 0 || by + radius > canvas.height) {
      bvy *= -1;
    }

    // Linkes Paddle treffen?
    if (bx - radius < 0 && by > py && by < py + ph) {
      bvx = -bvx * 1.1;   // 10% schneller
      bvy *= 1.1;
    }
    // Rechtes Paddle treffen?
    if (bx + radius > canvas.width && by > oy && by < oy + ph) {
      bvx = -bvx * 1.1;
      bvy *= 1.1;
    }

    // Tor links?
    if (bx < 0) {
      scoreAI++;
      resetBall();
    }
    // Tor rechts?
    if (bx > canvas.width) {
      scorePlayer++;
      resetBall();
    }

    // Player-Paddle steuern
    if (up)   py = Math.max(0, py - paddleSpeed);
    if (down) py = Math.min(canvas.height - ph, py + paddleSpeed);

    // Simple KI für rechtes Paddle
    if (oy + ph / 2 < by) oy += 1.5;
    if (oy + ph / 2 > by) oy -= 1.5;
  }

  function resetBall() {
    bx = canvas.width / 2;
    by = canvas.height / 2;
    bvx = baseSpeed * (Math.random() < 0.5 ? 1 : -1);
    bvy = baseSpeed * (Math.random() < 0.5 ? 1 : -1);
  }

  // Spiel starten
  resetBall();
  pongInterval = setInterval(() => {
    update();
    draw();
  }, 1000 / 60);
}
