 window.addEventListener("DOMContentLoaded", () => {
      // For every “post-image” on the page:
      document.querySelectorAll("img.post-image").forEach(img => {
        img.addEventListener("mouseenter", () => {
          // 1) Find the enclosing grey-box for this image
          const box = img.closest(".grey-box");
          if (!box) return;

          // 2) Within that grey-box, grab its overlay element
          const overlay = box.querySelector(".overlay");

          // 3) Measure the small image’s on-screen size
          const rect = img.getBoundingClientRect();
          const origW = rect.width;
          const origH = rect.height;

          // 4) Create a new <img> inside the overlay, with same src
          const bigImg = document.createElement("img");
          bigImg.src = img.src;

          // 5) Force it to be exactly twice as large (in pixels)
          bigImg.style.width = (origW * 0.1) + "vw";
          bigImg.style.height = (origH * 0.1) + "vw";

          // 6) Clear out any prior content, then append this enlarged image
          overlay.innerHTML = "";
          overlay.appendChild(bigImg);

          // 7) Show the overlay (fade in)
          overlay.classList.add("visible");
        });
      });

      // Whenever you click or mouse out of any overlay, hide it again
      document.querySelectorAll(".overlay").forEach(overlay => {
        overlay.addEventListener("click", () => {
          overlay.classList.remove("visible");
        });
        overlay.addEventListener("mouseleave", () => {
          overlay.classList.remove("visible");
        });
      });
    });