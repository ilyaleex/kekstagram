const hashtagsInput = document.querySelector('.text__hashtags');
const hashtagValidation = /^#[A-za-zА-Яа-я0-9]{1,19}$/;
const MAX_HASHTAGS_AMOUNT = 5;

hashtagsInput.addEventListener('input', () => {
  if (hashtagsInput.value !== '') {
    const hashtags = hashtagsInput.value.toLowerCase().trim().split(' ').filter((correctHashtags) => correctHashtags);
    const hashtagsSet = new Set(hashtags);
    hashtags.forEach((correctHashtags) => {
      if (!hashtagValidation.test(correctHashtags)) {
        hashtagsInput.setCustomValidity('Хэштег должен начинаться со знака "#" и включать в себя только буквы и/или цифры. Количество символов после знака "#" должно быть не менее 1 и не более 19. Чтобы добавить новый хэштег добавьте пробел.');
        hashtagsInput.style.borderColor = 'red';
      } else if (hashtags.length !== hashtagsSet.size) {
        hashtagsInput.setCustomValidity('Хэштеги не должны повторяться');
        hashtagsInput.style.bordColor = 'red';
      } else {
        hashtagsInput.setCustomValidity('');
        hashtagsInput.style.borderColor = 'green';
      }
      hashtagsInput.reportValidity();
    });
    if (hashtags.length > MAX_HASHTAGS_AMOUNT) {
      hashtagsInput.setCustomValidity(`Количество хэштегов не может быть больше ${MAX_HASHTAGS_AMOUNT}`);
    }
  }
});

