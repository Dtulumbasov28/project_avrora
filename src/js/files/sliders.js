/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Parallax,
} from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
// import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";

// Полный набор стилей из node_modules
// import 'swiper/css';
// Инициализация слайдеров для секции main
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на странице
  if (document.querySelector(".main__slider")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".main__slider", {
      // Указываем класс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      observer: true,
      slidesPerView: "auto",
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      loop: true,
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
					// Эффекты
					
		
					
					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
					// Кнопки "влево/вправо"
				navigation: {
				  prevEl: ".swiper-button-prev",
				  nextEl: ".swiper-button-next",
				},
			   
					*/

      // Пагинация

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      // Брейкпоинты
      /*
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 0,
							autoHeight: true,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1268: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					},
					*/
      // События
      on: {},
    });
  }
  if (document.querySelector(".about-cards-top")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".about-cards-top", {
      // Указываем класс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],
      //автопрокрутка
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        1360: { autoplay: false, navigation: false, slidesPerView: 4 },
        1060: {
          slidesPerView: 3,
        },
        578: {
          slidesPerView: 2,
        },
      },

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".about-top-button-prev",
        nextEl: ".about-top-button-next",
      },

      observer: true,
      observeParents: true,
      // кол-во видимых слайдов на странице
      slidesPerView: 1,
      // промежуток между слайдами
      spaceBetween: 10,
      // бесконечная прокрутка
      loop: true,
      // скорость прокрутки
      speed: 800,
      // отключение возможности прокрутки слайдера мышью
      allowTouchMove: false,

      // Кнопки "влево/вправо"

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
					// Эффекты
					
		
					
					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
			
			   
					*/

      // Пагинация

      pagination: {
        el: ".terms-pagination",
        clickable: true,
      },

      // Брейкпоинты
      /*
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 0,
							autoHeight: true,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1268: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					},
					*/
      // События
      on: {},
    });
  }
  if (document.querySelector(".about-cards-bottom")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".about-cards-bottom", {
      // Указываем класс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],
      //автопрокрутка
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        1360: { autoplay: false, navigation: false, slidesPerView: 4 },
        1060: {
          slidesPerView: 3,
        },
        578: {
          slidesPerView: 2,
        },
      },
      observer: true,
      observeParents: true,
      // кол-во видимых слайдов на странице
      slidesPerView: 1,
      // промежуток между слайдами
      spaceBetween: 10,
      // бесконечная прокрутка
      loop: true,
      // скорость прокрутки
      speed: 800,
      // отключение возможности прокрутки слайдера мышью
      allowTouchMove: false,

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".about-bottom-button-prev",
        nextEl: ".about-bottom-button-next",
      },

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
					// Эффекты
					
		
					
					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
			
			   
					*/

      // Пагинация

      pagination: {
        el: ".terms-pagination",
        clickable: true,
      },

      // Брейкпоинты
      /*
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 0,
							autoHeight: true,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1268: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					},
					*/
      // События
      on: {},
    });
  }
  if (document.querySelector(".terms__slider")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".terms__slider", {
      // Указываем класс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Pagination, Autoplay, EffectFade],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      autoHeight: true,
      speed: 800,
      loop: true,
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
					// Эффекты
					
		
					
					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
					// Кнопки "влево/вправо"
				navigation: {
				  prevEl: ".swiper-button-prev",
				  nextEl: ".swiper-button-next",
				},
			   
					*/

      // Пагинация

      pagination: {
        el: ".terms-pagination",
        clickable: true,
      },

      // Брейкпоинты
      /*
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 0,
							autoHeight: true,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1268: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					},
					*/
      // События
      on: {},
    });
  }
  if (document.querySelector(".benefits__body")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".benefits__body", {
      // Указываем класс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],
      //автопрокрутка
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        1360: { autoplay: false, navigation: false, slidesPerView: 3 },

        670: { slidesPerView: 2 },
        300: {
          slidesPerView: 1,
        },
      },
      observer: true,
      observeParents: true,
      // кол-во видимых слайдов на странице
      slidesPerView: 3,
      // промежуток между слайдами
      spaceBetween: 10,
      // бесконечная прокрутка
      loop: true,
      // скорость прокрутки
      speed: 800,
      // отключение возможности прокрутки слайдера мышью
      allowTouchMove: false,

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".benefits-button-prev",
        nextEl: ".benefits-button-next",
      },

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
					// Эффекты
				   
	   
				   
					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
		   
			   
			  // Пагинация
	  
			  pagination: {
				 el: ".terms-pagination",
				 clickable: true,
			  },
					*/

      // Брейкпоинты
      /*
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 0,
							autoHeight: true,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1268: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					},
					*/
      // События
      on: {},
    });
  }
  if (document.querySelector(".team__cards")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".team__cards", {
      // Указываем класс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],
      //автопрокрутка
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        1920: {
          slidesPerView: 5,
        },
        1359: {
          slidesPerView: 4,
        },
        760: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 2,
        },
      },
      observer: true,
      observeParents: true,
      // кол-во видимых слайдов на странице
      slidesPerView: 1,
      // промежуток между слайдами
      spaceBetween: 10,
      // бесконечная прокрутка
      loop: true,
      // скорость прокрутки
      speed: 800,
      // отключение возможности прокрутки слайдера мышью
      allowTouchMove: false,

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".team-button-prev",
        nextEl: ".team-button-next",
      },

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
					// Эффекты
					
		
					
					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
			
			   
					*/

      // Пагинация

      pagination: {
        el: ".terms-pagination",
        clickable: true,
      },

      // Брейкпоинты
      /*
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 0,
							autoHeight: true,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1268: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					},
					*/
      // События
      on: {},
    });
  }
  if (document.querySelector(".documents__cards")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".documents__cards", {
      // Указываем класс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],
      //автопрокрутка
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        1359: {
          slidesPerView: 2,
        },
        1920: {
          slidesPerView: 3,
        },
      },
      observer: true,
      observeParents: true,
      // кол-во видимых слайдов на странице
      slidesPerView: 1,
      // промежуток между слайдами
      spaceBetween: 12,
      // бесконечная прокрутка
      loop: true,
      // скорость прокрутки
      speed: 800,
      // отключение возможности прокрутки слайдера мышью
      allowTouchMove: false,

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".documents-button-prev",
        nextEl: ".documents-button-next",
      },

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
					// Эффекты
					
		
					
					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
			
			   
					*/

      // Пагинация

      pagination: {
        el: ".terms-pagination",
        clickable: true,
      },

      // Брейкпоинты
      /*
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 0,
							autoHeight: true,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1268: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					},
					*/
      // События
      on: {},
    });
  }
  if (document.querySelector(".gallery__photo")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".gallery__photo", {
      // Указываем класс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],
      //автопрокрутка
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
      },
      breakpoints: {
        1359: {
          slidesPerView: 2,
        },
        1920: {
          slidesPerView: 3,
        },
      },
      observer: true,
      observeParents: true,
      // кол-во видимых слайдов на странице
      slidesPerView: 1,
      // промежуток между слайдами
      spaceBetween: 10,
      // бесконечная прокрутка
      loop: true,
      // скорость прокрутки
      speed: 800,
      // отключение возможности прокрутки слайдера мышью
      allowTouchMove: false,

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".gallery-button-prev",
        nextEl: ".gallery-button-next",
      },

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
					// Эффекты
					
		
					
					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
			
			   
					*/

      // Пагинация

      pagination: {
        el: ".terms-pagination",
        clickable: true,
      },

      // Брейкпоинты
      /*
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 0,
							autoHeight: true,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1268: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					},
					*/
      // События
      on: {},
    });
  }
  if (document.querySelector(".reviews__body")) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    new Swiper(".reviews__body", {
      // Указываем класс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],
      //автопрокрутка
      autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true,
      },
      observer: true,
      observeParents: true,
      // кол-во видимых слайдов на странице
      // промежуток между слайдами
      spaceBetween: 30,
      // бесконечная прокрутка
      loop: true,
      // скорость прокрутки
      speed: 1000,
      // отключение возможности прокрутки слайдера мышью
      allowTouchMove: false,

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".reviews-button-prev",
        nextEl: ".reviews-button-next",
      },

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
					// Эффекты
					
		
					
					// Скроллбар
					/*
					scrollbar: {
						el: '.swiper-scrollbar',
						draggable: true,
					},
			
			   
					*/

      // Пагинация

      pagination: {
        el: ".terms-pagination",
        clickable: true,
      },

      // Брейкпоинты
      /*
					breakpoints: {
						320: {
							slidesPerView: 1,
							spaceBetween: 0,
							autoHeight: true,
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						992: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						1268: {
							slidesPerView: 4,
							spaceBetween: 30,
						},
					},
					*/
      // События
      on: {},
    });
  }
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
  // Добавление классов слайдера
  // при необходимости отключить

  bildSliders();

  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск инициализации слайдеров
  initSliders();
  // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
  //initSlidersScroll();
});
