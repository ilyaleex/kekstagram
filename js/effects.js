const MAX_EFFECT_VALUE = 100;
const EFFECT_STEP_VALUE = 1;
const MIN_EFFECT_VALUE = 0;

const imgPreview = document.querySelector('.img-upload__preview');
const imgPreviewPic = imgPreview.querySelector('img');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const effectSlider = document.querySelector('.img-upload__effect-level');

effectSlider.classList.add('hidden');
effectLevelValue.value = 100;
const effectClasses = imgPreviewPic.className.split(' ').filter((effectClass) => !effectClass.startsWith('effects__preview'));

noUiSlider.create(effectLevelSlider, {
  range: {
    min: MIN_EFFECT_VALUE,
    max: MAX_EFFECT_VALUE,
  },
  start: MAX_EFFECT_VALUE,
  step: EFFECT_STEP_VALUE,
  connect: 'lower',
  format: {
    to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
    from: (value) => parseFloat(value),
  },
});

const effectParameters = (currentClass, minRangeValue, maxRangeValue, sliderStep, effectName, effectUnit) => {
  effectSlider.classList.remove('hidden');
  imgPreviewPic.className = effectClasses.join(' ').trim();
  imgPreview.classList.add(currentClass);

  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: minRangeValue,
      max: maxRangeValue,
    },
    start: maxRangeValue,
    step: sliderStep,
  });

  effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];
    const filterStyle = `${effectName}(${effectLevelValue.value}${effectUnit})`;
    imgPreviewPic.style.filter = filterStyle;
  });
};

const setEffect = (effect) => {
  switch (effect) {
    case 'none':
      effectSlider.classList.add('hidden');
      imgPreviewPic.className = effectClasses.join(' ').trim();
      imgPreviewPic.style.filter = 'none';
      break;
    case 'chrome':
      effectParameters('.effect__preview--chrome', 0, 1, 0.1, 'grayscale', '');
      break;
    case 'sepia':
      effectParameters('.effect__preview--sepia', 0, 1, 0.1, 'sepia', '');
      break;
    case 'marvin':
      effectParameters('.effect__preview--marvin', 0, 100, 1, 'invert', '%');
      break;
    case 'phobos':
      effectParameters('.effect__preview--phobos', 0, 3, 0.1, 'blur', 'px');
      break;
    case 'heat':
      effectParameters('.effect__preview--heat', 1, 3, 0.1, 'brightness', '');
      break;
  }
};

const onSetEffect = (evt) => {
  if (evt.target.matches('.effects__radio')) {
    setEffect(evt.target.value);
  }
};

effectsList.addEventListener('change', onSetEffect);

export {imgPreviewPic, effectSlider};
