(function() {
  // Get the canvas element and its context
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  // Load the image
  const img = new Image();
  img.src = 'AHBc.png';

  // Define the duration of the transition in milliseconds
  const duration = 5000;

  // Define the number of steps for the transition
  const numSteps = 100;

  // Define the time interval between each step of the animation in milliseconds
  const interval = duration / numSteps;

  // Define the starting point for the drawing
  const startX = canvas.width / 2;
  const startY = canvas.height;

  // Define the ending point for the drawing
  const endX = canvas.width / 2;
  const endY = 0;

  // Define a variable to keep track of the current step in the animation
  let currentStep = 0;

  // Define a function to draw the image on each step of the animation
  function draw() {
    // Calculate the current position for the drawing
    const currentX = startX;
    const currentY = startY - (currentStep * (startY - endY) / numSteps);

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the image at the current position
    context.drawImage(img, 0, 0, img.width, img.height, currentX, currentY, img.width, img.height);

    // Increment the current step
    currentStep++;

    // Schedule the next step of the animation
    if (currentStep <= numSteps) {
      setTimeout(draw, interval);
    }
  }

  // Start the animation
  draw();
})();
