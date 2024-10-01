const images = document.querySelectorAll('.image-container img');
let activeImage = 0;
 
document.querySelector('.next').addEventListener('click', function() {
  images[activeImage].classList.remove('active');
  activeImage = (activeImage + 1) % images.length;
  images[activeImage].classList.add('active');
});
 
document.querySelector('.prev').addEventListener('click', function() {
  images[activeImage].classList.remove('active');
  activeImage = (activeImage - 1 + images.length) % images.length;
  images[activeImage].classList.add('active');
});
