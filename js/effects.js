/* eslint-disable no-unused-vars */
const imgPreview = document.querySelector('.img-upload__preview');
const imgPreviewPic = imgPreview.querySelector('img');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');

const effectNone = document.querySelector('#effect-none');
const effectChrome = document.querySelector('#effect-chrome');
const effectSepia = document.querySelector('#effect-sepia');
const effectMarvin = document.querySelector('#effect-marvin');
const effectPhobos = document.querySelector('#effect-phobos');
const effectHeat = document.querySelector('#effect-heat');

effectLevelSlider.classList.add('hidden');
effectLevelValue.value = 100;

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

const effectType = (effectName, effectUnit) => {
  effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    effectLevelValue.value = values[handle];
    const filterStyle = `${effectName}(${effectLevelValue.value}${effectUnit})`;
    imgPreviewPic.style.filter = filterStyle;
  });
};

const effectValues = (minRangeValue, maxRangeValue, sliderStep) => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: minRangeValue,
      max: maxRangeValue,
    },
    start: maxRangeValue,
    step: sliderStep,
  });
};

const effectClasses = imgPreviewPic.className.split(' ').filter((effectClass) => !effectClass.startsWith('effects__preview'));

const addEffectClass = (currentClass) => {
  effectLevelSlider.classList.remove('hidden');
  imgPreviewPic.className = effectClasses.join(' ').trim();
  imgPreview.classList.add(currentClass);
};

effectNone.addEventListener('click', () => {
  effectLevelSlider.classList.add('hidden');
  imgPreviewPic.className = effectClasses.join(' ').trim();
  imgPreviewPic.style.filter = 'none';
});

effectChrome.addEventListener('click', () => {
  addEffectClass('.effect__preview--chrome');
  effectValues(0, 1, 0.1);
  effectType('grayscle', '');
});

effectSepia.addEventListener('click', () => {
  addEffectClass('.effect__preview--sepia');
  effectValues(0, 1, 0.1);
  effectType('sepia', '');
});

effectMarvin.addEventListener('click', () => {
  addEffectClass('.effect__preview--marvin');
  effectValues(0, 100, 1);
  effectType('invert', '%');
});

effectPhobos.addEventListener('click', () => {
  addEffectClass('.effect__preview--phobos');
  effectValues(0, 3, 0.1);
  effectType('blur', 'px');
});

effectHeat.addEventListener('click', () => {
  addEffectClass('.effect__preview--heat');
  effectValues(1, 3, 0.1);
  effectType('brightness', '');
});

export {imgPreviewPic, effectLevelSlider, effectNone};
