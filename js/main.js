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





  //==========================================    swiper-slider   ==========================

  //swiper-projects
  var mySwiper = new Swiper('.swiper-container__content', {
    loop: true,
    effect: 'coverflow',
    pagination: {
      el: '.swiper__navigation',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper__button-next',
      prevEl: '.swiper__button-prev',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 30 + bullets.width() + 8);
  bullets.css('left', prev.width() + 8);



  //swiper-target
  var mySwiperTarget = new Swiper('.target__swiper-container', {
    loop: true,
    effect: 'coverflow',
    pagination: {
      el: '.target__pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.target__button-next',
      prevEl: '.target__button-prev',
    },

  });
  var nextTarget = $('.target__button-next');
  var prevTarget = $('.target__button-prev');
  var bulletsTarget = $('.target__pagination');

  nextTarget.css('left', prevTarget.width() + 30 + bulletsTarget.width() + 11);
  bulletsTarget.css('left', prevTarget.width() + 20);

  //-click block__item in target
  var block = $('.target-block__item');
  block.on('click', function (evt) {
    block.removeClass('target-block__item--active');
    $(this).toggleClass('target-block__item--active');
  });

  //-click-to-slide
  var targetBlock = $('.target-block');


  $('.target-block__item').on('click', function () {
    var index = $(this).data('index');



    // block.on('click', function () {
    //   block.removeClass('target-block__item--active');
    //   $(this).toggleClass('target-block__item--active');
    // });
    mySwiperTarget[0].slideTo(index);
    mySwiperTarget[1].slideTo(index);

  });



  // $('.target__button-next').on('click', function () {
  // var index = $('.target__slide').initialSlide();
  // console.log(mySwiperTarget[1].activeIndex);
  // block.addClass('target-block__item--active').data('index');

  // });
  // $('.target__button-prev').on('click', function () {
  //   block.removeClass('target-block__item--active');
  // });

  mySwiperTarget[0].on('slideChange', function () {
    var index = mySwiperTarget[0].realIndex;
    block.removeClass('target-block__item--active');
    block.eq(index).addClass('target-block__item--active');

  })





  // $('.target__slide').on('click', function () {
  //   var indexText = $(this).data('text');
  //   console.log(indexText);
  // })


  //========================================== END swiper-slider   ==========================

  //==========================================    wow js   ==========================
  new WOW().init();





  // ------------------- main animation 
  // var sectionTitle = $('.section-title');

  // var targetPos = sectionTitle.offset().top;
  var winHeight = $(window).height();
  // var scrollToElem = targetPos - winHeight;

  // $(window).scroll(function () {
  //   var winScrollTop = $(this).scrollTop();
  //   if (winScrollTop > scrollToElem) {

  //     // sectionTitle.addClass('animateSectionTitle');
  //     sectionTitle.toggleClass('animateSectionTitle');
  //   }
  //   // console.log(winScrollTop);
  //   console.log(scrollToElem);
  // });

  // var designCol = $('.design__col');
  // var targetDesign = designCol.offset().top;
  // var scrollDesign = targetDesign - winHeight;

  // $(window).scroll(function () {
  //   var winScrollTop = $(this).scrollTop();
  //   if (winScrollTop > scrollDesign) {
  //     designCol.toggleClass('animateCard');
  //   }
  // });

  var typesCol = $('.types__col-30');
  var targetTypes = typesCol.offset().top;
  var scrollTypes = targetTypes - winHeight;

  $(window).scroll(function () {
    var winScrollTop = $(this).scrollTop();
    if (winScrollTop > scrollTypes) {
      typesCol.toggleClass('animateCard');
    }
  });
















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
