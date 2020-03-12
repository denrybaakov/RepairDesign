/*
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


  closeBtn.addEventListener('click', switchModal);


  document.addEventListener('keydown', event => {
    if (event.keyCode === 27) {
      modal.classList.remove('modal--visible');
    }
  });

});
*/
document.addEventListener('DOMContentLoaded', function (event) {
  document.addEventListener('click', event => {
    if (event.target.matches('.button')) {
      event.target.focus();
    }
  });
});

$(document).ready(function () {


  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close'),
    scrollBtn = $('.scroll-top');



  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  $(this).keydown(function (event) {
    if (event.which == 27) {
      modal.removeClass('modal--visible');
    }
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      scrollBtn.removeClass('scroll-top__button--hidden')
    } else {
      scrollBtn.addClass('scroll-top__button--hidden')
    }
  });

  // var nt = $(document.body).scrollTop() - (e.deltaY * e.deltaFactor * 100);

  scrollBtn.on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $('html, body').animate({ scrollTop: 0 }, 1000, "swing");
  });

  console.log(scrollBtn);
});
