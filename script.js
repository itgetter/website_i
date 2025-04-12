document.addEventListener("DOMContentLoaded", function () {
  // Add a class to the body if touch is supported
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
    document.body.classList.add("touch-enabled");

    // Make each image block toggle .active on tap
    const imgBlocks = document.querySelectorAll(".img-block");
    
    imgBlocks.forEach(block => {
      block.addEventListener("click", function () {
        // Close all other blocks
        imgBlocks.forEach(b => {
          if (b !== block) b.classList.remove("active");
        });
        // Toggle the tapped one
        block.classList.toggle("active");
      });
    });
  }
});
