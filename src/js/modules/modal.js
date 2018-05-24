const modalDOM = document.getElementById('modal');

const setModal = function modal(message) {
  modalDOM.innerHTML = message;
};

export default { setModal, modalDOM };
