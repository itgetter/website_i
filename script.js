document.addEventListener('DOMContentLoaded', function() {
  const image = document.getElementById('main-image');
  const imageContainer = document.getElementById('image-container');
  const infoText = document.getElementById('info');
  const bottomText = document.getElementById('bottom-text');

  // Array of images and corresponding text
  const images = [
    { src: 'https://i.ibb.co/7JWFyYry/IMG-5650.jpg', text: 'Hello! I’m Shay Inkpen, a Temple University graduate (2024) with a degree in Film and Media Arts, focusing on screenwriting.' },
    { src: 'https://i.ibb.co/2FhN5b8/new-image.jpg', text: 'Here’s a new image and a fresh new story to tell. Keep moving forward.' },
    { src: 'https://i.ibb.co/6BBRf5r/IMG-5950.jpg', text: 'Each picture tells a story. Each frame has its own truth to uncover.' }
  ];

  let currentIndex = 0; // Keeps track of the current image and text index

  image.addEventListener('click', function() {
    // Animate the text out (zoom out)
    infoText.classList.remove('animate__zoomInDown');
    infoText.classList.add('animate__zoomOutUp');
    bottomText.classList.remove('animate__zoomInUp');
    bottomText.classList.add('animate__zoomOutDown');

    // Animate the image out (roll out)
    image.classList.remove('animate__rollIn');
    image.classList.add('animate__rollOut');

    // Wait for the image to finish rolling out before switching to the next
    image.addEventListener('animationend', function() {
      // Update the image and text based on the current index
      currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image after the last one
      image.src = images[currentIndex].src;
      infoText.textContent = images[currentIndex].text;
      bottomText.textContent = images[currentIndex].text;

      // Reset the animations for the new image and text
      image.classList.remove('animate__rollOut');
      image.classList.add('animate__rollIn');

      // Reset the zoom animations for the text (zoom in)
      infoText.classList.remove('animate__zoomOutUp');
      infoText.classList.add('animate__zoomInDown');

      bottomText.classList.remove('animate__zoomOutDown');
      bottomText.classList.add('animate__zoomInUp');
    }, { once: true });
  });

  // Initially trigger the roll-in animation
  setTimeout(function() {
    image.classList.add('animate__rollIn');
  }, 100);
});
