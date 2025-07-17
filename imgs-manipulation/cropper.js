import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

// Assuming you have an image element with id 'image'
const image = document.getElementById('image');
const cropper = new Cropper(image, {
  aspectRatio: 16 / 9,
  viewMode: 1,
  rotatable: true,
  scalable: true,
  zoomable: true,
  cropBoxMovable: true,
  cropBoxResizable: true,
});

// To rotate the image
document.getElementById('rotate-btn').addEventListener('click', () => {
  cropper.rotate(90);
});

// To crop the image
document.getElementById('crop-btn').addEventListener('click', () => {
  const croppedCanvas = cropper.getCroppedCanvas();
  // You can now use the croppedCanvas to display or save the cropped image
  document.getElementById('result').src = croppedCanvas.toDataURL();
});
import 'cropperjs/dist/cropper.css';

// Assuming you have an image element with id 'image'
const image = document.getElementById('image');
const cropper = new Cropper(image, {
  aspectRatio: 16 / 9,
  viewMode: 1,
  rotatable: true,
  scalable: true,
  zoomable: true,
  cropBoxMovable: true,
  cropBoxResizable: true,
});

// To rotate the image
document.getElementById('rotate-btn').addEventListener('click', () => {
  cropper.rotate(90);
});

// To crop the image
document.getElementById('crop-btn').addEventListener('click', () => {
  const croppedCanvas = cropper.getCroppedCanvas();
  // You can now use the croppedCanvas to display or save the cropped image
  document.getElementById('result').src = croppedCanvas.toDataURL();
});
