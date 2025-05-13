const commands = {
  "help": 
  `Available commands:/n

    
    whoami             Display information/n
    ls                 List available virtual files/n
    cat about.txt      Show CV
    cat skills.txt     Show technical skills
    cat experience.txt Show previous work experience
    clear              Clear the terminal output
    startx             Open the GUI
    rm -rf /           !!!DON'T USE IT!!!


  Example usage:
    cat skills.txt
    whoami
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

// open linkedin
// open github
// open mail
// echo hello world 
// curl -O CV.pdf
// startx -> startet einen desktop auf dem ein ordner ist mit meinem bewerbungs unterlagen cv, ein browser in dem ein tap mit 
// linkedin, github offen ist, ein email programm in dem man an mich eine mail verfassen kann. 


function runRmRf(output) {
  const steps = [
    "[ WARNING ] Deleting system files...",
    "[ INFO ] Unmounting root partition...",
    "[ OK ] /etc removed",
    "[ OK ] /home wiped",
    "[ CRITICAL ] Segmentation fault (core dumped)",
    "[ ERROR ] Unable to recover filesystem",
    "[ INFO ] Flushing system caches...",
    "[ OK ] /sanity not found",
    "[ KERNEL PANIC ] Unable to sync: Out of memory",
    "[ SYSTEM ] Broadcasting shutdown to all sessions...",
    "💀 System integrity: DESTROYED",
    "[ ... ]",
    "[ ... ]",
    "[ ... ]",
    "[ INIT ] Entering emergency recovery mode",
    "[ FAILED ] Could not load recovery shell",
    "[ HALT ] Shutting down services...",
    "[ BLACKOUT ]",
    "[...]",
    "[...]",
    "[...]"
  ];

  let i = 0;

  function nextLine() {
    if (i < steps.length) {
      output.innerHTML += `<div>${steps[i]}</div>`;
      i++;
      setTimeout(nextLine, i < 5 ? 800 : 500);
    } else {
      triggerFakeCrash();
    }
  }

  function triggerFakeCrash() {
    const blackout = document.createElement("div");
    blackout.style.position = "fixed";
    blackout.style.top = "0";
    blackout.style.left = "0";
    blackout.style.width = "100vw";
    blackout.style.height = "100vh";
    blackout.style.backgroundColor = "black";
    blackout.style.color = "red";
    blackout.style.fontSize = "24px";
    blackout.style.display = "flex";
    blackout.style.alignItems = "center";
    blackout.style.justifyContent = "center";
    blackout.style.zIndex = "9999";
    blackout.innerText = "FATAL ERROR: System Failure";

    document.body.appendChild(blackout);

    setTimeout(() => {
      blackout.innerText = "Just kidding!";
      blackout.style.color = "#33ff33";
    }, 5000);

    setTimeout(() => {
      document.body.removeChild(blackout);
      output.innerHTML += `<div>Relax, it's just a portfolio site – not your Linux box 😎</div>`;
    }, 7000);
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
      } else if (cmd === "startx") {
        output.innerHTML += `<div>Starting X Server... Launching GUI...</div>`;
        setTimeout(() => {
        window.location.href = "gui.html"; // GUI wird geladen
        }, 1500);

        input.value = "";
      } else {
        const response = commands[cmd] || `bash: ${cmd}: command not found
        Try 'help' for available commands.`;
        output.innerHTML += `<pre>${response}</pre>`;
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
Type 'help' to see available commands.'\n\n`;

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
