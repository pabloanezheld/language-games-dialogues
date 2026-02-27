document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  navToggle && navToggle.addEventListener('click', () => {
    if (mainNav.style.display === 'flex') mainNav.style.display = 'none';
    else mainNav.style.display = 'flex';
  });

  // Smooth scroll for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (window.innerWidth <= 720 && mainNav) mainNav.style.display = 'none';
      }
    });
  });

  // Chicago facts
  const facts = [
    "Chicago was incorporated as a city in 1837 and grew rapidly after the Illinois & Michigan Canal opened.",
    "The first skyscraper is often credited to the Home Insurance Building in Chicago (completed 1885).",
    "Chicago's 'Deep Dish' pizza was invented in 1943 at Pizzeria Uno.",
    "The Chicago River is the only river in the world that has been reversed by engineering (late 19th century).",
    "Wrigley Field, home of the Cubs, opened in 1914 and is one of the oldest Major League Baseball parks.",
    "Chicago is known as the 'Windy City' — the nickname may come from political 'windiness' rather than wind speed.",
    "The city's elevated trains, the 'L', have served Chicago since 1892.",
    "Chicago's skyline includes more skyscrapers than any U.S. city except New York as of recent counts.",
    "The Art Institute of Chicago houses Grant Wood's 'American Gothic' and many important works.",
    "Chicago hosted the World's Columbian Exposition in 1893, which showcased the Ferris Wheel and influenced architecture."
  ];

  const factText = document.getElementById('factText');
  const factBtn = document.getElementById('factBtn');
  const tweetBtn = document.getElementById('tweetBtn');

  function showFact() {
    if (!factText) return;
    const idx = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[idx];
  }

  factBtn && factBtn.addEventListener('click', showFact);
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      showFact();
    }
  });

  tweetBtn && tweetBtn.addEventListener('click', () => {
    if (!factText) return;
    const text = encodeURIComponent(factText.textContent + ' — #ChicagoFacts');
    const url = `https://twitter.com/intent/tweet?text=${text}`;
    window.open(url, '_blank', 'noopener');
  });

  // show initial fact
  showFact();
});
