// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
ymaps.ready(init);
function init() {
  const map = new ymaps.Map("map", {
    center: [55.78888941293173, 37.51802731246183],
    zoom: 14,
    controls: [],
    behaviors: [],
  });
  const placemark = new ymaps.Placemark(
    [55.78888941293173, 37.51802731246183],
    {},

    {
      iconLayout: "default#image",
      iconImageHref: "../../img/placemark.svg",
      iconImageSize: [56, 76],
    }
  );
  map.geoObjects.add(placemark);
}
