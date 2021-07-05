const imgPreview = document.querySelector('.img-upload__preview');
const imgPreviewPic = imgPreview.querySelector('img');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');

effectLevelSlider.classList.add('hidden');
effectLevelValue.value = 100;
const effectClasses = imgPreviewPic.className.split(' ').filter((effectClass) => !effectClass.startsWith('effects__preview'));

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
  format: {
    to: (value) => {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: (value) => parseFloat(value),
  },
});

const effectParameters = (currentClass, minRangeValue, maxRangeValue, sliderStep, effectName, effectUnit) => {
  effectLevelSlider.classList.remove('hidden');
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
      effectLevelSlider.classList.add('hidden');
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

const setEffectHandler = (evt) => {
  if (evt.target.matches('.effects__radio')) {
    setEffect(evt.target.value);
  }
};

effectsList.addEventListener('change', setEffectHandler);

export {imgPreviewPic, effectLevelSlider};
