new Vue({
  el: '#app',
  data: {
    name: 'Julian Schneider',
    title: 'Softwareentwickler | Cloud & Web',
    summary: 'Motivierter Entwickler mit Fokus auf sauberen Code, moderne Technologien und kreative Lösungen.',
    experience: [
      {
        role: 'Werkstudent Softwareentwicklung',
        company: 'MANN+HUMMEL',
        period: '2024–2025',
        description: 'Entwicklung eines IoT-Prototyps (Soft- und Hardware).'
      },
      {
        role: 'Praktikant Digitalisierung',
        company: 'Porsche AG',
        period: '2025',
        description: 'Business Capabilities analysiert & PowerApp entwickelt.'
      }
    ],
    skills: ['Python', 'Vue.js', 'Node.js', 'Docker', 'AWS', 'Git'],
    contact: {
      email: 'julian@example.com',
      linkedin: 'https://linkedin.com/in/julian-schneider'
    }
  }
})
