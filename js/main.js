$(document).ready(function () {

  //------прокрутка
  $('.link').click(function () {
    var elementClick = $('.link').attr("href");
    var destination = $(elementClick).offset().top - 300;

    // $('body').animate({ scrollTop: destination }, 1100);

    // else {
    $('html').animate({ scrollTop: destination }, 1100);
    // }
    return false
  });
  $('.scroll-down').click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 180;

    // $('body').animate({ scrollTop: destination }, 1100);

    $('html').animate({ scrollTop: destination }, 1100);
  });
  //--links
  $('.nav__item-projects').click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 180;
    $('html, body').animate({ scrollTop: destination }, 1100);
  })
  $('.nav__item-info').click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 1100);
  })
  $('.nav__item-team').click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 50;
    $('html, body').animate({ scrollTop: destination }, 1100);
  })
  $('.nav__item-feedback').click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 120;
    $('html, body').animate({ scrollTop: destination }, 1100);
  })
  $('.nav__item-contacts').click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top - 340;
    $('html, body').animate({ scrollTop: destination }, 1100);
  })
  $('.nav__item-index').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1800, "swing");
  })





  //----ТАБЫ 
  $('.interior-list__item').click(function () {
    var id = $(this).attr('data-tab'),
      content = $('.interior__col-60[data-tab="' + id + '"]');
    $('.interior-list__item.interior-list__item--active').removeClass('interior-list__item--active');
    $(this).addClass('interior-list__item--active');

    $('.interior__col-60.interior__col-60--active').removeClass('interior__col-60--active');
    content.addClass('interior__col-60--active');
  });


  //-----видео 
  var player;
  var btnVideo = $('.video__play');
  btnVideo.click(function onYouTubeIframeAPIReady() {

    player = new YT.Player('player', {
      height: '100%',
      width: '100%',
      videoId: 'BY9v5jOr4BY',
      events: {
        'onReady': videoPlay
      }
    });

    function videoPlay(event) {

      event.target.playVideo();
    }
  });




  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close'),
    scrollBtn = $('.scroll-top'),
    modalDialog = $('.modal__dialog');

  var closeReview = $('.review__close');
  var modalReview = $('.review');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });

  closeReview.on('click', function () {
    modalReview.removeClass('review--visible');
  })

  // close esc
  $(this).keydown(function (event) {
    if (event.which == 27) {
      modal.removeClass('modal--visible');
      modalReview.removeClass('review--visible');
    }
  });

  //---close click
  $(this).mouseup(function (event) {
    if (event.target != modalDialog[0] && modalDialog.has(event.target).length === 0) {
      modal.removeClass('modal--visible');
      modalReview.removeClass('review--visible');
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
    $('html, body').animate({ scrollTop: 0 }, 1800, "swing");
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


  //------interior slide 
  var interiorSwiper = new Swiper('.swiper-interior', {
    loop: true,
    // effect: 'fade',
    navigation: {
      nextEl: '.swiper-interior-next',
      prevEl: '.swiper-interior-prev'
    },
  });

  //========================================== END swiper-slider   ==========================

  //==========================================    wow js 
  new WOW().init();

  // ========================================= main animation 
  // var sectionTitle = $('.section-title');
  // var targetPos = sectionTitle.offset().top;
  // var winHeight = $(window).height();
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
  // var typesCol = $('.types__col-30');
  // var targetTypes = typesCol.offset().top;
  // var scrollTypes = targetTypes - winHeight;

  // $(window).scroll(function () {
  //   var winScrollTop = $(this).scrollTop();
  //   if (winScrollTop > scrollTypes) {
  //     typesCol.toggleClass('animateCard');
  //   }
  // });








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
        required: "Необходимо дать согласие"
      }
    },
    submitHandler: function (form) {
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "./send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);
          alert("Форма отправлена");
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    },
    submitHandler: function (form) {
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "./send.php",
        data: $(form).serialize(),
        success: function (response) {
          // console.log('Ajax сработал. Ответ сервера: ' + response);
          $(form)[0].reset();
          // $('.control__form').hide();
          $('.review').addClass('review--visible');
          $('.review__modal').html('<button class="modal__close"></button><h3 class="feedback">Ваша заявка на получение ссылки <span class="feedback__primary">успешно отправлена</span></h3><p class="feedback__description">Наш менеджер отправит Вам ссылку ближайшее время. А пока Вы можете посетить нашу <a href="https://vk.com/" class="feedback__link">группу в Вконтакте</a></p>');
        }
      });
    },
    errorPlacement: function (error, element) { // -----ошибка checkbox ))))
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }
      error.insertAfter($(element));
    }
  });


  $('.info-modal__form').validate({
    errorClass: "invalid__info",
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
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: {
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
      userEmail: {
        required: "Обязательно укажите корректный Email",
        email: "Введите в формате example@mail.ru"
      },
      policyCheckbox: {
        required: "Необходимо дать согласие"
      }
    },
    submitHandler: function (form) {
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "./send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал. Ответ сервера: ' + response);

          $(form)[0].reset();
          // $('.control__form').hide();
          $('.review').addClass('review--visible');
          $('.review__modal').html('<button class="modal__close"></button><h3 class="feedback">Ваша заявка на выезд замерщика <span class="feedback__primary">успешно отправлена</span></h3><p class="feedback__description">Наш менеджер свяжется с Вами в ближайшее время для уточнения даты выезда замерщика. А пока Вы можете посетить нашу <a href="https://vk.com/" class="feedback__link">группу в Вконтакте</a></p>');
        }
      });
    },
    errorPlacement: function (error, element) { // -----ошибка checkbox ))))
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }
      error.insertAfter($(element));
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
        required: "Необходимо дать согласие"
      }
    },
    submitHandler: function (form) {
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "./send.php",
        data: $(form).serialize(),
        success: function (response) {
          // console.log('Ajax сработал. Ответ сервера: ' + response);
          // alert("Форма отправлена");
          $(form)[0].reset();
          modal.removeClass('modal--visible');
        }
      });
    },
    submitHandler: function (form) {
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "./send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          $('.review').addClass('review--visible');
          $('.review__modal').html('<button class="modal__close"></button><h3 class="feedback">Ваш вопрос <span class="feedback__primary">успешно отправлен</span></h3><p class="feedback__description">Наш менеджер свяжеться с Вами в ближайшее время. А пока Вы можете посетить нашу <a href="https://vk.com/" class="feedback__link">группу в Вконтакте</a></p>');
        }
      });
    },
    errorPlacement: function (error, element) { // -----ошибка checkbox ))))
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }
      error.insertAfter($(element));
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
        required: "Необходимо дать согласие"
      }
    },
    submitHandler: function (form) {
      event.preventDefault();
      $.ajax({
        type: "POST",
        url: "./send.php",
        data: $(form).serialize(),
        success: function (response) {
          $(form)[0].reset();
          $('.modal__form').hide();
          $('.modal__dialog').html('<button class="modal__close"></button><h3 class="feedback">Ваша заявка <span class="feedback__primary">успешно отправлена</span></h3><p class="feedback__description">Наш менеджер свяжеться в ближайшее время. А пока Вы можете посетить нашу <a href="https://vk.com/" class="feedback__link">группу в Вконтакте</a></p>');
          $('.modal__close').on('click', function () {
            modal.toggleClass('modal--visible');
          });
        }
      });
    },
    errorPlacement: function (error, element) { // -----ошибка checkbox ))))
      if (element.attr("type") == "checkbox") {
        return element.next('label').append(error);
      }
      error.insertAfter($(element));
    }
  });

  closeBtn.on('click', function () {
    modal.removeClass('modal--visible');
  });


  //=================== Mask Phone =====================
  $('[type=tel]').mask('+7 (000) 000-00-00', { placeholder: "Ваш номер телефона: " });
  // $('[type=tel]').mask('+8 (000) 000-00-00 ', { placeholder: "____________" });

});




//====================== Yandex Map ==================================
// var quality = $('#team');
// var qualityTop = quality.offset().top - 150;
// $(window).bind('scroll', function () {
//   var windowTop = $(this).scrollTop();
//   if (windowTop > qualityTop) {
//     $('#map').html('<script src="https://api-maps.yandex.ru/2.1/?apikey=e6dba517-cc98-484d-aa4e-8c6635e00a49&lang=ru_RU"></script>');
//     $(window).unbind('scroll');
//   } else {
//     console.log('errorr maap');
//   }
// });


// ymaps.ready(function () {
//   var myMap = new ymaps.Map('map', {
//     center: [55.783635, 49.112424],
//     zoom: 16
//   }, {
//     searchControlProvider: 'yandex#search'
//   }),


//     MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//       '<div style="color: #e3e3e3; font-weight: bold;">$[properties.iconContent]</div>'
//     ),

//     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//       hintContent: 'Наш офис',
//       balloonContent: 'Вход со двора'
//     }, {

//       iconLayout: 'default#image',

//       iconImageHref: 'img/mapMarker.png',

//       iconImageSize: [40, 40],

//       iconImageOffset: [-5, -38]
//     });




//   myMap.behaviors.disable('scrollZoom');
//   myMap.geoObjects.add(myPlacemark);
// });






//Переменная для включения/отключения индикатора загрузки
var spinner = $('.footer__map').children('.loader');
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
var myMapTemp, myPlacemarkTemp;

//Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
function init() {
  var myMapTemp = new ymaps.Map("map", {
    center: [55.783635, 49.112424], // координаты центра на карте
    zoom: 16, // коэффициент приближения карты
    controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
  });
  var myPlacemarkTemp = new ymaps.Placemark(myMapTemp.getCenter(), {
    balloonContent: "Здесь может быть ваш адрес",
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './img/mapMarker.png',
    // Размеры метки.
    iconImageSize: [40, 40],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-5, -38]
  });
  myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
  myMapTemp.behaviors.disable('scrollZoom');
  // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
  var layer = myMapTemp.layers.get(0).get(0);

  // Решение по callback-у для определения полной загрузки карты
  waitForTilesLoad(layer).then(function () {
    // Скрываем индикатор загрузки после полной загрузки карты
    spinner.removeClass('is-active');
  });
}

// Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
function waitForTilesLoad(layer) {
  return new ymaps.vow.Promise(function (resolve, reject) {
    var tc = getTileContainer(layer), readyAll = true;
    tc.tiles.each(function (tile, number) {
      if (!tile.isReady()) {
        readyAll = false;
      }
    });
    if (readyAll) {
      resolve();
    } else {
      tc.events.once("ready", function () {
        resolve();
      });
    }
  });
}

function getTileContainer(layer) {
  for (var k in layer) {
    if (layer.hasOwnProperty(k)) {
      if (
        layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
        || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
      ) {
        return layer[k];
      }
    }
  }
  return null;
}

// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback) {
  var script = document.createElement("script");

  if (script.readyState) {  // IE
    script.onreadystatechange = function () {
      if (script.readyState == "loaded" ||
        script.readyState == "complete") {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function () {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
var ymap = function () {
  $('.footer__map').mouseenter(function () {
    if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

      // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
      check_if_load = true;

      // Показываем индикатор загрузки до тех пор, пока карта не загрузится
      spinner.addClass('is-active');

      // Загружаем API Яндекс.Карт
      loadScript("https://api-maps.yandex.ru/2.1/?apikey=e6dba517-cc98-484d-aa4e-8c6635e00a49&lang=ru_RU", function () {
        // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
        ymaps.load(init);
      });
    }
  }
  );
}

$(function () {

  //Запускаем основную функцию
  ymap();

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
