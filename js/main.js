document.addEventListener('DOMContentLoaded', function (event) {

  const modal = document.querySelector('.modal');
  const closeModal = document.querySelector('[data-modal=close]')
  const modalDialog = document.querySelector('.modal__dialog');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');

  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });




  // modal.addEventListener('click', (e) => {
  //   if (e.target.className == '.modal__dialog') {
  //     console.log('click');
  //   } else if (e.target.className == 'modal--visible') {
  //     console.log(' жуть муть дуть')
  //   } else {
  //     console.log('err')
  //   }

  // });




  // console.log(modal)
  // console.log(modalDialog)




  // closeModal.addEventListener('click', () => {
  //   console.log('click to ne modal')
  // })




  closeBtn.addEventListener('click', switchModal);


  document.addEventListener('keydown', event => {
    if (event.keyCode === 27) {
      modal.classList.remove('modal--visible')
    }
  });














});