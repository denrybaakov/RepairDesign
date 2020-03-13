$(document).ready(function () {

  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close'),
    scrollBtn = $('.scroll-top'),
    modalDialog = $('.modal__dialog');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  // close esc
  $(this).keydown(function (event) {
    if (event.which == 27) {
      modal.removeClass('modal--visible');
    }
  });

  //---close click
  $(this).mouseup(function (event) {
    if (event.target != modalDialog[0] && modalDialog.has(event.target).length === 0) {
      modal.removeClass('modal--visible');
    }
  })

  //scroll ------
  $(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
      scrollBtn.removeClass('scroll-top__button--hidden')
    } else {
      scrollBtn.addClass('scroll-top__button--hidden')
    }
  });

  scrollBtn.on('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
    $('html, body').animate({ scrollTop: 0 }, 1000, "swing");
  });



  //swiper-slider------projects
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 30 + bullets.width() + 8);
  bullets.css('left', prev.width() + 8);

});
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
