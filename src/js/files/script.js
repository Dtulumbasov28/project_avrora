// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";



ymaps.ready(init);
function init() {
	var map = new ymaps.Map("map", {
		center: [55.78888941293173, 37.51802731246183],
		zoom: 14,
		controls: [], 
		// behaviors: [],

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
	// map.controls.add('fullscreenControl');
	map.geoObjects.add(placemark);
}


//---------------------  Блокировка отправки формы "Заказать звонок" без согласия на обработку данных

let callCheckbox = document.querySelector(".popup__checkbox-call"); // Кнопка чекбокса
let callButton = document.querySelector(".popup__button-call"); // Кнопка отправки формы 

callCheckbox.addEventListener("click", function () {
	callCheckbox.toggleAttribute("checked");
	callButton.toggleAttribute("disabled");
});

//---------------------  Блокировка отправки формы "Задать вопрос" без согласия на обработку данных

let questionCheckbox = document.querySelector(".popup__checkbox-question"); // Кнопка чекбокса
let questionButton = document.querySelector(".popup__button-question"); // Кнопка отправки формы 

questionCheckbox.addEventListener("click", function () {
	questionCheckbox.toggleAttribute("checked");
	questionButton.toggleAttribute("disabled");
});






//--------------------- Масска ввода номера телефона
const phoneCall = document.querySelector(".popup__input-call--tel");
const phoneQuestion = document.querySelector(".popup__input-question--tel");


const prefixNumber2 = (str) => {
	if (str === "7") {
		return "7 (";
	}
	if (str === "8") {
		return "8 (";
	}
	if (str === "9") {
		return "7 (9";
	}
	return "7 (";
};

// ===== Валидация номера телефона для попапа "Заказать звонок"
phoneCall.addEventListener("input", (e) => {
	const value = phoneCall.value.replace(/\D+/g, "");
	const numberLength = 11;

	let result;
	if (phoneCall.value.includes("+8") || phoneCall.value[0] === "8") {
		result = "";
	} else {
		result = "+";
	}
	// =====
	for (let i = 0; i < value.length && i < numberLength; i++) {
		switch (i) {
			case 0:
				result += prefixNumber2(value[i]);
				continue;
			case 4:
				result += ") ";
				break;
			case 7:
				result += "-";
				break;
			case 9:
				result += "-";
				break;
			default:
				break;
		}
		result += value[i];
	}

	// =====
	phoneCall.value = result;
});
// ===== Валидация номера телефона для попапа "Заказать звонок"
phoneQuestion.addEventListener("input", (e) => {
	const value = phoneQuestion.value.replace(/\D+/g, "");
	const numberLength = 11;

	let result;
	if (phoneQuestion.value.includes("+8") || phoneQuestion.value[0] === "8") {
		result = "";
	} else {
		result = "+";
	}
	// =====
	for (let i = 0; i < value.length && i < numberLength; i++) {
		switch (i) {
			case 0:
				result += prefixNumber2(value[i]);
				continue;
			case 4:
				result += ") ";
				break;
			case 7:
				result += "-";
				break;
			case 9:
				result += "-";
				break;
			default:
				break;
		}
		result += value[i];
	}

	// =====
	phoneQuestion.value = result;
});