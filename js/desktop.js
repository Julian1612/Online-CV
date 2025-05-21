function openWindow(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = 'block';
    el.style.zIndex = ++openWindow.counter;
  }
}
openWindow.counter = 10;

function closeWindow(id) {
  const el = document.getElementById(id);
  if (el) el.style.display = 'none';
}

function openTxtFile(id, filePath) {
  openWindow(id);
  fetch(filePath)
    .then(res => res.text())
    .then(text => {
      const el = document.getElementById(`${id}-body`);
      if (el) el.innerHTML = marked.parse(text);
    })
    .catch(err => {
      console.error(`Fehler beim Laden von ${filePath}:`, err);
    });
}

window.addEventListener('DOMContentLoaded', () => {
  openTxtFile('readmeWindow', 'txt/readMe.md');
});
