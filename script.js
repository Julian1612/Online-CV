const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "Julian Schneider",
      title: "Junior Softwareentwickler",
      skills: ["JavaScript", "Python", "Vue.js", "AWS", "Docker"],
    };
  },
  template: `
    <div>
      <h1>{{ name }}</h1>
      <h2>{{ title }}</h2>

      <div class="section">
        <h3>Skills</h3>
        <ul>
          <li v-for="skill in skills" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
  `,
}).mount("#app");
