function animate() {
  // Your animation code here
  console.log("Frame rendered");
  // Request the next frame
  requestAnimationFrame(animate);
} // Start the animation
animate();
