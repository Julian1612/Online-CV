const commands = {
  // bleibt wie bei dir
};

function initTerminal() {
  const input = document.getElementById("commandInput");
  const output = document.getElementById("output");

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const cmd = input.value.trim();
      output.innerHTML += `<div><span class="prompt">julian@cv:~$</span> ${cmd}</div>`;

      if (cmd === "clear") {
        output.innerHTML = "";
      } else {
        const response = commands[cmd] || `bash: ${cmd}: command not found
Try 'help' for available commands.`;
        output.innerHTML += `<div>${response}</div>`;
      }

      input.value = "";
      output.scrollTop = output.scrollHeight;
    }
  });
}

function typeWelcome() {
  const welcomeEl = document.getElementById("welcome");
  let i = 0;
  const welcomeText = `Welcome to Julian's Interactive CV Terminal
Type 'help' to see available commands.
Use commands like 'cat skills.txt' or 'whoami'\n\n`;

  function type() {
    if (i < welcomeText.length) {
      welcomeEl.innerHTML += welcomeText.charAt(i) === "\n" ? "<br/>" : welcomeText.charAt(i);
      i++;
      setTimeout(type, 25);
    } else {
      document.querySelector(".input-block").style.display = "block";
      document.getElementById("commandInput").focus();
      initTerminal(); // <== HIER aktivieren wir den Listener
    }
  }

  type();
}

window.onload = typeWelcome;
