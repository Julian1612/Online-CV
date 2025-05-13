const input = document.getElementById("commandInput");
const output = document.getElementById("output");

const commands = {
  help: `Available commands:
- about
- skills
- experience
- clear`,

  about: `I'm Julian – a curious software developer with a background in mechatronics.
I love clean code, dark UIs, and building things that actually solve problems.`,

  skills: `Languages: Python, C, C++, Bash, JavaScript
Frameworks: Node.js, Vue.js, AWS
Tools: Git, Docker, Linux, VS Code`,

  experience: `Porsche – Digital Engineering Intern
- Built Power Apps for internal tools

MANN+HUMMEL – Prototyping Intern
- Developed a hardware/software IoT solution from scratch`,

  clear: ""
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = input.value.trim();
    output.innerHTML += `<div><span class="prompt">julian@cv:~$</span> ${cmd}</div>`;

    if (cmd === "clear") {
      output.innerHTML = "";
    } else {
      const response = commands[cmd] || `Command not found: ${cmd}
Type 'help' for list of commands.`;
      output.innerHTML += `<div>${response}</div>`;
    }

    input.value = "";
    output.scrollTop = output.scrollHeight;
  }
});
