const SCALE_STEP = 25;
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const imgPreview = imgUploadPreview.querySelector('img');


let scaleInputValue = 100;
scaleInput.value = `${scaleInputValue}%`;

const rescaleImg = (evt, value) => {
  if (evt) {
    scaleInputValue = value;
    scaleInput.value = `${scaleInputValue}%`;

    const transformValue = `scale(${scaleInputValue * 0.01})`;
    imgPreview.style.transform = transformValue;
  }
};

scaleSmaller.addEventListener('click', () => {
  rescaleImg(scaleInputValue > SCALE_STEP, scaleInputValue - SCALE_STEP);
});

scaleBigger.addEventListener('click', () => {
  rescaleImg(scaleInputValue < 100, scaleInputValue + SCALE_STEP);
});

export {scaleInputValue, imgPreview};
