
// Terminal öffnen
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

// Tabs im Internetfenster
function openTab(tabId, el) {
  document.querySelectorAll('#internetWindow .browser-content')
    .forEach(c => c.style.display = 'none');
  document.querySelectorAll('#internetWindow .tab')
    .forEach(t => t.classList.remove('active'));
  document.getElementById(tabId).style.display = 'block';
  el.classList.add('active');
}

// E-Mail senden
function sendEmail(event) {
  event.preventDefault();
  const to      = encodeURIComponent(document.getElementById('emailTo').value);
  const subject = encodeURIComponent(document.getElementById('emailSubject').value);
  const body    = encodeURIComponent(document.getElementById('emailBody').value);
  window.open(`mailto:${to}?subject=${subject}&body=${body}`, '_blank');
}
