const commands = {
  "help": `Available commands:

  whoami             Display user information
  ls                 List available virtual files
  cat about.txt      Show biography
  cat skills.txt     Show technical skills
  cat experience.txt Show previous work experience
  clear              Clear the terminal output
  man <command>      Show manual page for command

Example usage:
  cat skills.txt
  man whoami
  clear`,

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

function runRmRf(output) {
  const steps = [
    "[ WARNING ] Deleting system files...",
    "[ OK ] /etc removed",
    "[ OK ] /home wiped",
    "[ OK ] /sanity not found",
    "💀 System integrity: DESTROYED",
    ".",
    "..",
    "...",
    "Just kidding.",
    "Relax, it's just a portfolio site – not your Linux box 😎"
  ];

  let i = 0;

  function nextLine() {
    if (i < steps.length) {
      output.innerHTML += `<div>${steps[i]}</div>`;
      i++;
      setTimeout(nextLine, i < 5 ? 800 : 500); // längere Pause für Drama
    }
  }

  nextLine();
}

function initTerminal() {
  const input = document.getElementById("commandInput");
  const output = document.getElementById("output");

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const cmd = input.value.trim();
      output.innerHTML += `<div><span class="prompt">julian@cv:~$</span> ${cmd}</div>`;

    if (cmd === "clear") {
        output.innerHTML = "";
    } else if (cmd == "rm -rf /") {
        runRmRf(output);
        input.value = "";
    }
    else {
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
      initTerminal();
    }
  }

  type();
}

window.onload = typeWelcome;
