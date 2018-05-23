export const hideUIElement = function hideUIElement(element) {
  element.classList.add('hide');
};

export const revealUIElement = function revealUIElement(element) {
  element.classList.remove('hide');
};

export const toggleUIElement = function toggleUIElement(element) {
  element.classList.toggle('hide');
};
