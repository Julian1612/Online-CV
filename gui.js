function openWindow(id) {
  document.getElementById(id).style.display = 'block';
}

function closeWindow(id) {
  document.getElementById(id).style.display = 'none';
}

// Clock logic
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  clock.textContent = time;
}

setInterval(updateClock, 1000);
updateClock();
