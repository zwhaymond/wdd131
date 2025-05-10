document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
      alert('You clicked an image!');
    });
  });
  