function toggleMenu() {
    const menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
    }
}
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section, .container-topo");
  const navLinks = document.querySelectorAll(".nav-buttons a button");

  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.parentElement.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});