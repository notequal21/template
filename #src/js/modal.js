/* Функция закрывает по нажатие на кнопку модальное окно */
function bclose() {
	$("#popup").bPopup().close();
	return false;
}

/* Функция показывает модальное окно по нажатию на кнопку */
function bopen() {
	$('#popup').bPopup();
	return false;
}

/* Функция отображает модальное окно автоматически после загрузки страницы через одну секунду */
// $( document ).ready(function() {
// 	setTimeout(function() {
//         /* Вызываем модальное окно */
//         $('#popup').bPopup();	
// 	}, 1000);
// });