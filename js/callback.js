// ========= (c)2015 :: html & css & jquery coding :: Polyakov - http://polyakov.co.ua  =========

// =========================================================================  contact_form
$(function() {
	//Функция проверяет заполнено ли поле с телефоном
	function formValide() {
		var str = $('#contact_form input[name=phone]').val();
		str = jQuery.trim(str);
		if(str.length < 5){
			alert ('Введите телефон');
			return false;
		}
		return true;
	}

	//Функция проверяет заполнено ли поле с телефоном на форме
	//калькулятора
	function formValide_calc() {
		var str = $('#calc_form input[name=phone]').val();
		str = jQuery.trim(str);
		if(str.length < 5){
			alert ('Введите телефон');
			return false;
		}
		return true;
	}


	//при нажатии на кнопку button нужной формы запускаем функцию обработки данных
	$('#contact_form .button').on('click', function() {
		if (formValide()) {
			//если форма прошла проверку, выводим блок с текстом ожидания
			$('#contact_form').before('<h3 id="contact_form_info">Оформление заявки. Подождите...</h3>');
			$('#contact_form').hide();
			//берем путь php обработчика
			order_url = $('#contact_form').attr('action');
			//посылаем асинхронный запрос на сервер и передаем все данные формы
			$.post(order_url,{
					name: $('#contact_form input[name=name]').val(),
					tel: $('#contact_form input[name=tel]').val(),
                    email: $('#contact_form input[name=email]').val(),
                    message: $('#contact_form textarea[name=message]').val(),
					send: "1"
				}, function(data) {
					//выводим возврашаемый сервером код html вместо содержимого формы
				$('#contact_form').html(data);
				$('#contact_form').show();
				$('#contact_form_info').remove();
			}, "html");
		}
		return false;
	});


	//при нажатии на кнопку button нужной формы запускаем функцию обработки данных
	//тоже самое, только для формы калькулятора
	$('#calc_form .button').on('click', function() {
		if (formValide_calc()) {
			//если форма прошла проверку, выводим блок с текстом ожидания
			$('#calc_form').before('<h3 id="calc_form_info">Оформление заявки. Подождите...</h3>');
			$('#calc_form').hide();
			//берем путь php обработчика
			order_url = $('#calc_form').attr('action');
			//посылаем асинхронный запрос на сервер и передаем все данные формы
			$.post(order_url,{
					name: $('#calc_form input[name=name]').val(),
					tel: $('#calc_form input[name=tel]').val(),
                    email: $('#calc_form input[name=email]').val(),
					send: "1"
				}, function(data) {
					//выводим возврашаемый сервером код html вместо содержимого формы
				$('#calc_form').html(data);
				$('#calc_form').show();
				$('#calc_form_info').remove();
			}, "html");
		}
		return false;
	});

});

// =========================================================================  go_order
$(function() {
	//функция вызова формы обратной связи
	$('.callback, .button_call #callback, .zakaz_gel, .send_zayavka').click(function(){
		//появление окна обратной связи
		$('#popup').fadeIn();
		//добавляем к окну иконку закрытия
        $('#popup').append('<a id="popup_close"></a>');
		//расчитываем высоту и ширину всплывающего окна что бы вывести окно прямо по центру экрана
        q_width = $('#popup').outerWidth()/-2;
        q_height = $('#popup').outerHeight()/-2;
        $('#popup').css({
            'margin-left': q_width,
            'margin-top': q_height
        });
		//выводим затемение страницы и делаем полупрозрачным
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
		return false;
	});

	//Функция вызова формы калькулятора
	$('.btn_block .calculate, .button_calc .calculate').click(function(){
		//появление окна калькулятора
		$('#calc').fadeIn();

		//тут добавляем к окну иконку закрытия
		$('#calc').append('<a id="calc_close"></a>');
		//расчитываем высоту и ширину всплывающего окна что бы вывести окно прямо по центру экрана
        q_width = $('#calc').outerWidth()/-2;
        q_height = $('#calc').outerHeight()/-2;
        $('#calc').css({
            'margin-left': q_width,
            'margin-top': q_height
        });

        //выводим затемение страницы и делаем полупрозрачным
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
		return false;


	});
	//Функция вызова формы калькулятора


	//Функция открытия окна "Подробнее о браслете"
	$('.normal4').click(function(){
		//появление окна обратной связи
		$('#more').fadeIn();
		//добавляем к окну иконку закрытия
        $('#more').append('<a id="more_close"></a>');
		//расчитываем высоту и ширину всплывающего окна что бы вывести окно прямо по центру экрана
        q_width = $('#more').outerWidth()/-2;
        q_height = $('#more').outerHeight()/-2;
        $('#more').css({
            'margin-left': q_width,
            'margin-top': q_height
        });
		//выводим затемение страницы и делаем полупрозрачным
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
		return false;
	});





	//функция закрытия окна
	$('body').on('click','#popup_close, #more_close, #fade, #calc_close',function(){
		$('#fade').fadeOut(function() {
			$('#fade').remove();
            $('#popup_close').remove();
			$('#popup').fadeOut();

			$('#calc_close').remove();
			$('#calc').fadeOut();		

			$('#more_close').remove();
			$('#more').fadeOut();	

		});
	});



});