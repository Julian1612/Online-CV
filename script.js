const input = document.getElementById("commandInput");
const output = document.getElementById("output");
const welcomeText = `Welcome to Julian's Interactive CV Terminal
Type 'help' to see available commands.
Use commands like 'cat skills.txt' or 'whoami'\n\n`;

let i = 0;
function typeWelcome() {
  const welcomeEl = document.getElementById("welcome");
  if (i < welcomeText.length) {
    welcomeEl.innerHTML += welcomeText.charAt(i) === "\n" ? "<br/>" : welcomeText.charAt(i);
    i++;
    setTimeout(typeWelcome, 25); // Tippgeschwindigkeit
  } else {
    document.querySelector(".input-block").style.display = "block";
    document.getElementById("commandInput").focus();
  }
}
window.onload = typeWelcome;

const commands = {
  "help": `usage: [command]

Available commands:
  whoami            Show info about me
  ls                List available sections
  cat about.txt     Show biography
  cat skills.txt    List skills
  cat experience.txt Show work experience
  clear             Clear the terminal`,

  "whoami": `julian.schneider
Full-Stack Dev | Mechatronics background | Loves minimalism`,

  "ls": `about.txt  skills.txt  experience.txt`,

  "cat about.txt": `Julian Schneider is a developer with a mechatronics background.
He's worked on IoT prototypes, PowerApps, and cloud tools.`,

  "cat skills.txt": `Languages:
  - Python
  - C / C++
  - JavaScript
  - Bash

Frameworks & Tools:
  - Node.js / Vue.js
  - AWS / Docker / Git
  - Linux / VS Code`,

  "cat experience.txt": `2024 - Porsche
  • Built internal MS PowerApps, supported digitalisation projects

2023 - MANN+HUMMEL
  • Developed IoT prototype incl. hardware and firmware`,

  "clear": ""
};

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
