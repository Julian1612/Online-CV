// 1) Desktop laden
function loadDesktop() {
  fetch('desktop.html')
    .then(r => r.text())
    .then(html => {
      document.getElementById('desktop-root').innerHTML = html;
      initializeGUI();
    })
    .catch(e => console.error('Load Desktop failed:', e));
}

// 2) GUI-Initialisierung
function initializeGUI() {
  setInterval(updateClock, 1000);
  updateClock();
}

// 3) Fenster öffnen/schließen
function openWindow(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'block', el.style.zIndex = ++openWindow.counter;
}
openWindow.counter = 10;

function closeWindow(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

// 4) Taskbar-Uhr
function updateClock() {
  const c = document.getElementById('clock');
  c.textContent = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
}

// 5) Start-Menü togglen
function toggleStartMenu() {
  const m = document.getElementById('startMenu');
  m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
}
window.addEventListener('click', e => {
  if (!e.target.closest('.start-menu-wrapper')) {
    document.getElementById('startMenu').style.display = 'none';
  }
});

// 6) .txt-Fenster öffnen
function openTxtFile(id) {
  ['file1','file2'].forEach(i=> closeWindow(i));
  openWindow(id);
}

// 7) Terminal-Fenster öffnen
let terminalInitialized = false;
function openTerminal() {
  closeWindow('startMenu');
  if (!terminalInitialized) {
    openWindow('terminalWindow');
    typeWelcome();
    terminalInitialized = true;
  } else {
    openWindow('terminalWindow');
    document.getElementById('commandInput').focus();
  }
}

function openTab(tabId, el) {
  // alle Contents verstecken
  document.querySelectorAll('#internetWindow .browser-content')
    .forEach(c => c.style.display = 'none');
  // alle Tabs deaktivieren
  document.querySelectorAll('#internetWindow .tab')
    .forEach(t => t.classList.remove('active'));
  // gewählten Content zeigen und Tab aktiv setzen
  document.getElementById(tabId).style.display = 'block';
  el.classList.add('active');
}


/**
 * Sendet die E-Mail per mailto und schließt das Fenster.
 */
function sendEmail(event) {
  event.preventDefault();
  const to      = encodeURIComponent(document.getElementById('emailTo').value);
  const subject = encodeURIComponent(document.getElementById('emailSubject').value);
  const body    = encodeURIComponent(document.getElementById('emailBody').value);
  window.open(`mailto:${to}?subject=${subject}&body=${body}`, '_blank');
}

function updateClock() {
  const now    = new Date();
  const clock  = document.getElementById("clock");
  const dateEl = document.getElementById("date");

  clock.textContent = now.toLocaleTimeString([], {
    hour: '2-digit', minute: '2-digit'
  });
  dateEl.textContent = now.toLocaleDateString('de-DE', {
    weekday: 'short', day: '2-digit', month: '2-digit'
  });
}

setInterval(updateClock, 1000);
updateClock();

