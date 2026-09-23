const noteToggle = document.getElementById("note-toggle");
const fullNote = document.getElementById("full-note");

noteToggle?.addEventListener("click", () => {
  const isOpen = noteToggle.getAttribute("aria-expanded") === "true";

  noteToggle.setAttribute("aria-expanded", String(!isOpen));
  fullNote.hidden = isOpen;

  noteToggle.textContent = isOpen
    ? "Read the full Author's Note"
    : "Show less";
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
