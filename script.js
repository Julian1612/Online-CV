const toggle = document.getElementById("mode-toggle");
const root = document.documentElement;
let dark = false;

toggle.addEventListener("click", () => {
  dark = !dark;
  root.style.setProperty("--bg", dark ? "#000" : "#fff");
  root.style.setProperty("--text", dark ? "#fff" : "#000");
  toggle.textContent = dark ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Easter Egg: zeige bei Konami Code ein geheimes Feld
const egg = document.getElementById("egg");
let keys = [];
const secret = "38384040373937396665"; // ArrowUp x2, ArrowDown x2, etc.

window.addEventListener("keydown", (e) => {
  keys.push(e.keyCode);
  keys.splice(-secret.length - 1, keys.length - secret.length);
  if (keys.join("") === secret) {
    egg.style.display = "block";
  }
});
