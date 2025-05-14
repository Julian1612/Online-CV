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

document.getElementById("terminalWindow").addEventListener("click", function () {
  if (!window.terminalInitialized) {
    window.terminalInitialized = true;
    setTimeout(() => {
      typeWelcome(); // kommt aus script.js
    }, 100);
  }
});



setInterval(updateClock, 1000);
updateClock();
