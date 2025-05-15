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

  // Ball
  let bx = canvas.width/2, by = canvas.height/2;
  let bvx = 2, bvy = 1.5, radius = 5;

  // Paddles
  const ph = 40, pw = 5;
  let py = (canvas.height-ph)/2, oy = py;
  const speed = 3;

  // Input
  let up=false, down=false;
  window.onkeydown = e => {
    if (e.key==='ArrowUp') up=true;
    if (e.key==='ArrowDown') down=true;
  };
  window.onkeyup = e => {
    if (e.key==='ArrowUp') up=false;
    if (e.key==='ArrowDown') down=false;
  };

  function draw() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.arc(bx,by,radius,0,Math.PI*2);
    ctx.fill();
    ctx.fillRect(0,py,pw,ph);
    ctx.fillRect(canvas.width-pw,oy,pw,ph);
  }

  function update() {
    bx += bvx; by += bvy;
    if (by-radius<0||by+radius>canvas.height) bvy*=-1;
    if (bx-radius<0 && by>py && by<py+ph) bvx*=-1;
    if (bx+radius>canvas.width && by>oy && by<oy+ph) bvx*=-1;
    if (bx<0||bx>canvas.width) {
      bx=canvas.width/2; by=canvas.height/2;
    }
    if (up)   py = Math.max(0, py-speed);
    if (down) py = Math.min(canvas.height-ph, py+speed);
    // simple AI
    if (oy+ph/2 < by) oy += 1.5;
    if (oy+ph/2 > by) oy -= 1.5;
  }

  pongInterval = setInterval(()=>{
    update();
    draw();
  },1000/60);
}
