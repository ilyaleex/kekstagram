const SCALE_STEP = 25;
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

let currentScale = 100;

const setImgScale = (newScale) => {
  scaleInput.value = `${newScale}%`;
  imgPreview.style.transform = `scale(${newScale / 100})`;
  currentScale = newScale;
};

const scaleSmallerHandler = () => {
  if (currentScale > SCALE_STEP) {
    currentScale -= SCALE_STEP;
    setImgScale(currentScale);
  }
};

const scaleBiggerHandler = () => {
  if (currentScale < 100) {
    currentScale += SCALE_STEP;
    setImgScale(currentScale);
  }
};

scaleSmaller.addEventListener('click', scaleSmallerHandler);
scaleBigger.addEventListener('click', scaleBiggerHandler);

export {imgPreview, setImgScale};
