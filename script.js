document.addEventListener('DOMContentLoaded', function() {
  const image = document.getElementById('main-image');
  const infoText = document.getElementById('info');
  const bottomText = document.getElementById('bottom-text');

  // Array of images and corresponding text
  const images = [
    { 
      src: 'https://i.ibb.co/Z1cMFSFy/portrait.png', 
      infoText: 'Hello! I’m Shay Inkpen, a Temple University graduate (2024) with a degree in Film and Media Arts, focusing on screenwriting. Over the years, Ive gained hands-on experience in multiple areas of filmmaking, including producing, script supervising, gaffing, and acting. I also enjoy directing, lighting, and cinematography for my own projects, where I get to wear a few extra creative hats.', 
      bottomText: 'You can find my scripts, short stories, and essays <a>here</a>, and my video projects <a>here</a>. If you’re interested in collaborating on an existing project or starting something new, feel free to <a>reach out!</a> I’d love to connect.' 
    },
    { 
      src: 'https://i.ibb.co/8LTPtG9b/gaffportrait.png', 
      infoText: 'I spent time gaffing for an independent film company in the Poconos, crafting light to hold the desolate and piercing beauty of <i>Genisis Valley</i>.',
      bottomText: 'We worked day and night to properly illuminate the slow-burn, post-apocalyptic thriller.' 
    },
    { 
      src: 'https://i.ibb.co/QvxLT9T6/Image-Editor.jpg', 
      infoText: 'I provided script supervision for the film <em>Marina</em>, starring Peter Friedman <em>(Succession)</em> and Grace McLean. An incredible honor to work with such talented actors and crewmembers.',
      bottomText: 'The film involved an incredible amount of tension, pain, and beauty - a haunted, strange beauty that shows up especially in the final moments, where the art direction was able to shine its brightest.' 
    },
    { 
      src: 'https://i.ibb.co/Xx4JPHbd/Image-Editor-2.png" alt="Image-Editor-2', 
      infoText: 'I had the rare privilege of having my script read at the Phoenixville Film Festival. It was a great experience to meet new people, hear new stories, and experience the storytelling techniques others use to navigate their worlds.',
      bottomText: 'Looking forward to next year!' 
    }
  ];

  let currentIndex = 0; // Keeps track of the current image and text index

  // Trigger the rollIn animation initially and text zoom-in
  image.classList.add('animate__animated', 'animate__rollIn');
  infoText.classList.add('animate__animated', 'animate__zoomInDown');
  bottomText.classList.add('animate__animated', 'animate__zoomInUp');

  // Handle image click to change content
  image.addEventListener('click', function() {
    // Animate text out (zoom out)
    infoText.classList.remove('animate__zoomInDown');
    infoText.classList.add('animate__zoomOutUp');
    bottomText.classList.remove('animate__zoomInUp');
    bottomText.classList.add('animate__zoomOutDown');

    // Animate the image out (rollOut)
    image.classList.remove('animate__rollIn');
    image.classList.add('animate__rollOut');

    // Wait for rollOut to finish and then update the image and text
    image.addEventListener('animationend', function() {
      // Update the image and text based on the current index
      currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image after the last one
      image.src = images[currentIndex].src;
      infoText.innerHTML = images[currentIndex].infoText;
      bottomText.innerHTML = images[currentIndex].bottomText;

      // Reset the rollIn animation after switching content
      image.classList.remove('animate__rollOut');
      image.classList.add('animate__rollIn');

      // Reset the zoom animations for the text (zoom in)
      infoText.classList.remove('animate__zoomOutUp');
      infoText.classList.add('animate__zoomInDown');

      bottomText.classList.remove('animate__zoomOutDown');
      bottomText.classList.add('animate__zoomInUp');
    }, { once: true });
  });
});
