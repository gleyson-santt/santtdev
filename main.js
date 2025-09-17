document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target); // ativa uma vez só
        }
      });
    },
    { threshold: 0.2 } // dispara quando 20% da seção aparece
  );

  sections.forEach(section => observer.observe(section));
});
