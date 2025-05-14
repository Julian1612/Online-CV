function openWindow(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = 'block';
    el.style.zIndex = ++openWindow.zIndexCounter;
  }
}
openWindow.zIndexCounter = 10;

function closeWindow(id) {
  document.getElementById(id).style.display = 'none';
}

function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function toggleStartMenu() {
  const menu = document.getElementById("startMenu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Schließt das Startmenü, wenn man außerhalb klickt
window.addEventListener("click", function (e) {
  const menu = document.getElementById("startMenu");
  if (!e.target.closest(".start-menu-wrapper")) {
    menu.style.display = "none";
  }
});

function openTxtFile(id) {
  closeAllTextFiles();
  openWindow(id);
}

function closeAllTextFiles() {
  ['file1', 'file2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}

let terminalInitialized = false;
function openTerminal() {
  // Startmenü ausblenden, sobald Terminal gestartet wird
  document.getElementById("startMenu").style.display = "none";
  if (!terminalInitialized) {
    openWindow('terminalWindow');
    typeWelcome();
    terminalInitialized = true;
  } else {
    openWindow('terminalWindow');
    document.getElementById("commandInput").focus();
  }
}

// Starte die Uhr
setInterval(updateClock, 1000);
updateClock();
