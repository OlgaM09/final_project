
window.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".btn1, .action-btn2, .action-btn3 ,.action-submit");
  const hoverColor    = "#A3C201";

  buttons.forEach(btn => {
 
    const originalColor = getComputedStyle(btn).backgroundColor;

    btn.addEventListener("mouseenter", () => {
      btn.style.backgroundColor = hoverColor;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.backgroundColor = originalColor;
    });
  });
});