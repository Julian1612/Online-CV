
// GUI initialisieren (Uhr & Datum)
function initializeGUI() {
  setInterval(updateClock, 1000);
  updateClock();
}

function updateClock() {
  const now = new Date();
  const clock = document.getElementById("clock");
  const dateEl = document.getElementById("date");

  if (clock) {
    clock.textContent = now.toLocaleTimeString([], {
      hour: '2-digit', minute: '2-digit'
    });
  }

  if (dateEl) {
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2);
    dateEl.textContent = `${day}.${month}.${year}`;
  }
}

// Retro-Startmenü
function toggleRetroMenu() {
  const menu = document.getElementById('retroMenu');
  menu.classList.toggle('hidden');
}

// Ausschalten
function shutdown() {
  alert("System wird heruntergefahren...");
}

// GUI auf Terminal-Modus schalten
function switchToTerminalMode() {
  closeAllWindows();
  openWindow('terminalWindow');
}

// Alle Fenster schließen
function closeAllWindows() {
  document.querySelectorAll('.window').forEach(el => el.style.display = 'none');
}
