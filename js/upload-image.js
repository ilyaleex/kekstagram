const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const UPLOAD_DEFAULT_IMAGE = 'img/upload-default-image.jpg';

const fileChooser = document.querySelector('#upload-file');
const imagePreview = document.querySelector('.img-upload__preview img');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();

  const isMatch = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (isMatch) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      imagePreview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }

  imagePreview.src = UPLOAD_DEFAULT_IMAGE;
});
