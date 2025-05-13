document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".btn");
  const headline = document.querySelector("h1");

  button.addEventListener("click", () => {
    const messages = [
      "Nice to see you here! 👀",
      "Let's build something great 🚀",
      "Minimalism meets tech 🖤",
      "Welcome, explorer 🌌",
    ];
    const random = messages[Math.floor(Math.random() * messages.length)];
    headline.textContent = random;
  });
});
