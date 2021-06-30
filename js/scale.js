const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleInput = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

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
  rescaleImg(scaleInputValue > 25, scaleInputValue - 25);
});

scaleBigger.addEventListener('click', () => {
  rescaleImg(scaleInputValue < 100, scaleInputValue + 25);
});
