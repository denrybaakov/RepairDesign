document.addEventListener('DOMContentLoaded', function (event) {

  const modal = document.querySelector('.modal');
  const modalDialog = document.querySelector('.modal__dialog');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');

  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });




  modal.addEventListener('click', () => {

    console.log('click dd')
  });


  modalDialog.addEventListener('click', function () {
    console.log('clickModal')
  });

  console.log(modal)
  console.log(modalDialog)









  closeBtn.addEventListener('click', switchModal);


  document.addEventListener('keydown', event => {
    if (event.keyCode === 27) {
      switchModal();
    }
  });














});