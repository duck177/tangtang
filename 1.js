const flowerGallery = document.querySelector('.flower-gallery');

// 假设你有一些花朵图片的 URL 数组
const flowerImages = [
  'img1.jpg',
  'img2.jpg',
  'img3.jpg',
  // 添加更多图片
];

flowerImages.forEach(imageUrl => {
  const img = document.createElement('img');
  img.src = imageUrl;
  img.classList.add('flower-image');
  flowerGallery.appendChild(img);
});

fetch('http://your-server-url/api/data')
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(error => console.error('Error:', error));