
// 1) Fenster öffnen/schließen
function openWindow(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'block', el.style.zIndex = ++openWindow.counter;
}
openWindow.counter = 10;

function closeWindow(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

// .txt-Dateien öffnen
function openTxtFile(id) {
  ['file1', 'file2'].forEach(i => closeWindow(i));
  openWindow(id);
}
