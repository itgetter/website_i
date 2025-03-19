document.addEventListener('DOMContentLoaded', function() {
  const image = document.getElementById('main-image');
  const infoText = document.getElementById('info');
  const bottomText = document.getElementById('bottom-text');
  const button2 = document.querySelector('.button2'); // The button that is getting affected
  const clickMeText = document.querySelector('.clickme h3'); // Reference to .clickme h3 for text fades

  // Array of images and corresponding text (no <em> or <span> tags, applying italics via CSS)
  const images = [
    { 
      src: 'https://i.ibb.co/Z1cMFSFy/portrait.png', 
      infoText: 'Hello! I’m Shay Inkpen, a Temple University graduate (2024) with a degree in Film and Media Arts, focusing on screenwriting. Over the years, Ive gained hands-on experience in multiple areas of filmmaking, including producing, script supervising, gaffing, and acting. I also enjoy directing, lighting, and cinematography for my own projects, where I get to wear a few extra creative hats.',
      bottomText: 'You can find my scripts, short stories, and essays <a class="intextlink" href="index5.html">here</a>, and my video projects <a class="intextlink" href="index4.html">here</a>. If you’re interested in collaborating on an existing project or starting something new, feel free to <a class="intextlink" href="index7.html">reach out!</a> I’d love to connect.' 
    },
    { 
      src: 'https://i.ibb.co/8LTPtG9b/gaffportrait.png', 
      infoText: 'I spent time gaffing for an independent film company in the Poconos, crafting light to hold the desolate and piercing beauty of "Genesis Valley"',
      bottomText: 'We worked day and night to properly illuminate the slow-burn, post-apocalyptic thriller.' 
    },
    { 
      src: 'https://i.ibb.co/QvxLT9T6/Image-Editor.jpg', 
      infoText: 'I provided script supervision for the film Marina, starring Peter Friedman ("Succession") and Grace McLean. An incredible honor to work with such talented actors and crewmembers.',
      bottomText: 'The film involved an incredible amount of tension, pain, and beauty - a haunted, strange beauty that shows up especially in the final moments, where the art direction was able to shine its brightest.' 
    },
    { 
      src: 'https://i.ibb.co/Xx4JPHbd/Image-Editor-2.png', 
      infoText: 'I had the rare privilege of having my script read at the Phoenixville Film Festival. It was a great experience to meet new people, hear new stories, and experience the storytelling techniques others use to navigate their worlds.',
      bottomText: 'Looking forward to next year!' 
    }
  ];

  let currentIndex = 0; // Keeps track of the current image and text index

  // Trigger the rollIn animation initially and text zoom-in
  image.classList.add('animate__animated', 'animate__rollIn');
  infoText.classList.add('animate__animated', 'animate__zoomInDown');
  bottomText.classList.add('animate__animated', 'animate__zoomInUp');

  // Preload the next image
  function preloadImage(src) {
    const img = new Image();
    img.src = src;
    return img;
  }

  // Store the initial height of the infoText container
  const initialInfoTextHeight = infoText.offsetHeight;  // Store the height once on page load

  // Handle image click to change content
  image.addEventListener('click', function() {
    // Fade out the clickMe text (h3) and animate the image out (rollOut)
    clickMeText.classList.add('animate__animated', 'animate__fadeOut'); // Fade out the text
    image.classList.remove('animate__rollIn');
    image.classList.add('animate__rollOut');
    
    // Animate the text out (zoom out)
    infoText.classList.remove('animate__zoomInDown');
    infoText.classList.add('animate__zoomOutUp');
    bottomText.classList.remove('animate__zoomInUp');
    bottomText.classList.add('animate__zoomOutDown');

    // Preload the next image before changing the source
    const nextImage = preloadImage(images[(currentIndex + 1) % images.length].src);

    // Wait for the rollOut animation to finish before switching the image
    image.addEventListener('animationend', function() {
      // Update the image and text based on the current index
      currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image after the last one
      image.src = nextImage.src; // Change the source to the preloaded image
      infoText.innerHTML = images[currentIndex].infoText;
      bottomText.innerHTML = images[currentIndex].bottomText;

      // Ensure the height remains the same every time new text loads
      infoText.style.height = `${initialInfoTextHeight}px`;  // Set the height to the initial height

      // Reset the rollIn animation after switching content
      image.classList.remove('animate__rollOut');
      image.classList.add('animate__rollIn');

      // Reset the zoom animations for the text (zoom in)
      infoText.classList.remove('animate__zoomOutUp');
      infoText.classList.add('animate__zoomInDown');
      bottomText.classList.remove('animate__zoomOutDown');
      bottomText.classList.add('animate__zoomInUp');

      // Ensure the clickMe text fades back in after the image switch
      setTimeout(function() {
        clickMeText.classList.remove('animate__fadeOut');
        clickMeText.classList.add('animate__fadeIn');
      }, 1000); // Wait for 1 second before fading the text back in (to match the animation duration)
    }, { once: true });
  });

  // Apply smooth transition to prevent shifts affecting button2
  infoText.style.transition = "height 0.5s ease";  // Transition the height of infoText smoothly
  infoText.style.lineHeight = '1.5'; // Set line height to prevent awkward placement
  infoText.style.whiteSpace = 'normal';  // Ensure text wraps correctly

  // Fix for centering infoText (if necessary)
  infoText.style.display = "flex";
  infoText.style.justifyContent = "center";
  infoText.style.alignItems = "center";
});

window.addEventListener('resize', function() {
  const arrow = document.getElementById('arrow');
  
  // Check if screen width is <= 768px (small screen)
  if (window.innerWidth <= 768) {
    arrow.innerHTML = "↓"; // Change to down arrow for smaller screens
  } else {
    arrow.innerHTML = "→"; // Change back to right arrow for larger screens
  }
});

// Run the resize function once when the page loads
window.dispatchEvent(new Event('resize'));
