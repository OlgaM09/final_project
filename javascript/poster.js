 window.addEventListener("DOMContentLoaded", () => {
     
      document.querySelectorAll("img.post-image").forEach(img => {
        img.addEventListener("mouseenter", () => {
          const box = img.closest(".grey-box");
          if (!box) return;

 
          const overlay = box.querySelector(".overlay");

        
          const rect = img.getBoundingClientRect();
          const origW = rect.width;
          const origH = rect.height;

        
          const bigImg = document.createElement("img");
          bigImg.src = img.src;

       
          bigImg.style.width = (origW * 0.1) + "vw";
          bigImg.style.height = (origH * 0.1) + "vw";

       
          overlay.innerHTML = "";
          overlay.appendChild(bigImg);

         
          overlay.classList.add("visible");
        });
      });

      document.querySelectorAll(".overlay").forEach(overlay => {
        overlay.addEventListener("click", () => {
          overlay.classList.remove("visible");
        });
        overlay.addEventListener("mouseleave", () => {
          overlay.classList.remove("visible");
        });
      });
    });