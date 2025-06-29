 window.addEventListener("DOMContentLoaded", () => {
      
      const cartLink = document.querySelector(".buy2");

    
      let count = 0;
      const match = cartLink.textContent.match(/\((\d+)\)/);
      if (match) {
        count = parseInt(match[1], 10);
      }

      const plusButtons = document.querySelectorAll(".plus-btn");

      plusButtons.forEach(btn => {
        btn.addEventListener("click", () => {
          count++;
          cartLink.textContent = `КОРЗИНА (${count})`;
        });
      });
    });