async function loadDesktop() {
    try {
      const [desktopRes, taskbarRes, programsRes] = await Promise.all([
        fetch('desktop.html'),
        fetch('taskbar.html'),
        fetch('programs.html')
      ]);
  
      const [desktopHTML, taskbarHTML, programsHTML] = await Promise.all([
        desktopRes.text(),
        taskbarRes.text(),
        programsRes.text()
      ]);
  
      document.getElementById('desktop-root').innerHTML = `
        <div class="desktop">
          ${desktopHTML}
          ${programsHTML}
          ${taskbarHTML}
        </div>
      `;
  
      initializeGUI();
  
      // 📂 readMe.md automatisch öffnen nach GUI-Initialisierung
      openTxtFile('readmeWindow', 'txt/readMe.md');
  
    } catch (e) {
      console.error('Load Desktop failed:', e);
    }
  }
  
  