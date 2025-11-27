
'use strict';

function typeWriter(text, element, typingSpeed=15, callback) {
  let index = 0;
  function typeChar() {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      setTimeout(typeChar, typingSpeed);
    } else if (callback) {
      callback();
    }
  }
  typeChar();
}