 window.addEventListener("DOMContentLoaded", () => {
      // Find the cart link (Корзина (N))
      const cartLink = document.querySelector(".buy2");

      // Parse its initial number from “Корзина (0)”
      let count = 0;
      const match = cartLink.textContent.match(/\((\d+)\)/);
      if (match) {
        count = parseInt(match[1], 10);
      }

      // Find all yellow “+” buttons
      const plusButtons = document.querySelectorAll(".plus-btn");

      plusButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          // Increment and update the link text
          count++;
          cartLink.textContent = `Корзина (${count})`;
        });
      });
    });