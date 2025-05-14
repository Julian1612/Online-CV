const commands = {
  "help": `Available commands:

  whoami             Display info
  ls                 List files
  cat about.txt      Show CV
  cat skills.txt     Show skills
  cat experience.txt Show experience
  clear              Clear output
  rm -rf /           !!! WARNING !!!
  startx             Reset GUI

Example:
  cat skills.txt
  help
  clear`,
  "whoami": `julian.schneider
Full-Stack Dev | Mechatronics background`,
  "ls": `about.txt  skills.txt  experience.txt`,
  "cat about.txt": `Julian Schneider is a developer with a mechatronics background...`,
  "cat skills.txt": `- Python
- C / C++
- JavaScript
- Bash
- AWS / Docker / Git`,
  "cat experience.txt": `2024 - Porsche: MS PowerApps, Digitalization
2023 - MANN+HUMMEL: IoT Prototype`,
  "clear": ""
};

function runRmRf(output) {
  const steps = [
    "[ WARNING ] Deleting system files...",
    "[ INFO ] Unmounting root partition...",
    "[ OK ] /etc removed",
    "[ CRITICAL ] Core dumped",
    "[ ERROR ] Filesystem unrecoverable",
    "[ SYSTEM ] Shutting down services",
    "💀 SYSTEM FAILURE",
    "[...]"
  ];
  let i=0;
  (function next(){
    if (i<steps.length) {
      output.innerHTML+=`<div>${steps[i++]}</div>`;
      setTimeout(next, 800);
    } else {
      fakeCrash(output);
    }
  })();
}

function fakeCrash(output) {
  const scr = document.createElement('div');
  Object.assign(scr.style,{
    position:'fixed',top:0,left:0,width:'100vw',height:'100vh',
    background:'#000',color:'red',display:'flex',alignItems:'center',
    justifyContent:'center',fontSize:'24px',zIndex:9999
  });
  scr.innerText="FATAL ERROR: System Failure\nWebsite not available. Sorry.";
  document.body.appendChild(scr);

  setTimeout(()=>{
    scr.innerText="Just kidding.";
    scr.style.color='#33ff33';
  },5000);

  setTimeout(()=>{
    document.body.removeChild(scr);
    output.innerHTML+=`<div>Relax, it's just a portfolio site 😎</div>`;
  },7000);
}

function initTerminal() {
  const input = document.getElementById('commandInput');
  const output = document.getElementById('output');
  input.addEventListener('keydown', e => {
    if (e.key==='Enter') {
      const cmd = input.value.trim();
      output.innerHTML+=`<div><span class="prompt">julian@cv:~$</span> ${cmd}</div>`;
      if (cmd==='clear') {
        output.innerHTML='';
      } else if (cmd==='rm -rf /') {
        runRmRf(output);
      } else if (cmd==='startx') {
        output.innerHTML+=`<div>Restarting GUI...</div>`;
        setTimeout(() => location.reload(), 1000);
      } else {
        const res = commands[cmd]||`bash: ${cmd}: command not found`;
        output.innerHTML+=`<pre>${res}</pre>`;
      }
      input.value='';
      output.scrollTop = output.scrollHeight;
    }
  });
}

function typeWelcome() {
  const w = document.getElementById('welcome');
  const txt = `Welcome to Julian's CV Terminal
Type 'help' for commands.\n\n`;
  let i=0;
  (function t(){
    if (i<txt.length) {
      w.innerHTML+= txt[i]==='\n'?'<br/>':txt[i];
      i++; setTimeout(t,25);
    } else {
      document.querySelector('.input-line').style.display='flex';
      document.getElementById('commandInput').focus();
      initTerminal();
    }
  })();
}
