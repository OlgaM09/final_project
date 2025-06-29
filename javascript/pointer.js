 window.addEventListener("DOMContentLoaded", () => {
      const cursor = document.getElementById("custom-cursor");

      document.addEventListener("mousemove", e => {
        cursor.style.top  = e.clientY + "px";
        cursor.style.left = e.clientX + "px";

   
        const dot = document.createElement("div");
        dot.className = "trail";
        dot.style.top  = e.clientY + "px";
        dot.style.left = e.clientX + "px";
        document.body.appendChild(dot);

       
        dot.addEventListener("animationend", () => {
          dot.remove();
        });
      });

     
      document.addEventListener("mouseleave", () => {
        cursor.style.display = "none";
      });
      document.addEventListener("mouseenter", () => {
        cursor.style.display = "block";
      });
    });