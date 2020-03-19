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
    mySwiperTarget[0].slideTo(index);
    mySwiperTarget[1].slideTo(index);
  });

  mySwiperTarget[0].on('slideChange', function () {
    var index = mySwiperTarget[0].realIndex;
    block.removeClass('target-block__item--active');
    block.eq(index).addClass('target-block__item--active');
  });

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








  //==================== validate ===================
  // валидация формы 
  $('.control__form').validate({
    errorClass: "invalid__control",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 18
      },
      controlCheckbox: {
        required: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2-х букв"
      },
      userPhone: {
        required: "Телефон обязательно",
        minlength: "Телефон должен быть полным"
      },
      controlCheckbox: {
        required: "Нужно заполнить"
      }
    }
  });

  $('.footer__form').validate({
    errorClass: "invalid__footer",
    errorElement: "div",
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 18
      },
      userQuestion: {
        required: true,
        minlength: 8,
      },
      footerCheckbox: {
        required: true
      }
    },
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2-х букв"
      },
      userPhone: {
        required: "Телефон обязательно",
        minlength: "Телефон должен быть полным"
      },
      userQuestion: {
        required: "Поле должно быть не пустое",
        minlength: "Вопроc должен состоять минимум из 8 символов"
      },
      footerCheckbox: {
        required: "Нужно согласиться"
      }
    }
  });


  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило, converted to {required:true}
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 18
      },
      // правило-объект
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: {
        required: true
      }

    }, // сообщения
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Имя не короче 2-х букв"
      },
      userPhone: {
        required: "Телефон обязательно",
        minlength: "Телефон должен быть полным"
      },
      userEmail: {
        required: "Обязательно укажите корректный Email",
        email: "Введите в формате example@mail.ru"
      },
      policyCheckbox: {
        required: "Нужно согласиться"
      }
    }
  });

  $('.policy__checkbox').validate({
    onclick: false,
    messages: {
      onclick: "Нужно согласиться"
    }
  });









  //====================== Yandex Map =================
  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
      center: [55.783635, 49.112424],
      zoom: 16
    }, {
      searchControlProvider: 'yandex#search'
    }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'Наш офис',
        balloonContent: 'Вход со двора'
      }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: 'img/mapMarker.png',
        // Размеры метки.
        iconImageSize: [40, 40],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
      });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemark);
  });




































  //=================== Mask Phone =====================
  $('[type=tel]').mask('+7 (000) 000-00-00', { placeholder: "Ваш номер телефона: " });
  // $('[type=tel]').mask('+8 (000) 000-00-00 ', { placeholder: "____________" });

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
