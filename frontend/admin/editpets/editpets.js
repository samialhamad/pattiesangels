const buttons = document.querySelectorAll('.add-picture');

buttons.forEach(button => {
  button.addEventListener('click', handlePictureUpload);
});

function handlePictureUpload(event) {
  const index = event.target.dataset.index;
  const imageElement = document.querySelector(`.picture[data-index="${index}"]`);

 
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      imageElement.src = reader.result;
      imageElement.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}