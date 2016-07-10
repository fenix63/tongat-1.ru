// ========= (c)2015 :: html & css & jquery coding :: Polyakov - http://polyakov.co.ua  =========

// =========================================================================  contact_form
$(function() {
	//Р¤СѓРЅРєС†РёСЏ РїСЂРѕРІРµСЂСЏРµС‚ Р·Р°РїРѕР»РЅРµРЅРѕ Р»Рё РїРѕР»Рµ СЃ С‚РµР»РµС„РѕРЅРѕРј
	function formValide() {
		var str = $('#contact_form input[name=tel]').val();
		str = jQuery.trim(str);
		if(str.length < 5){
			alert ('Р’РІРµРґРёС‚Рµ С‚РµР»РµС„РѕРЅ');
			return false;
		}
		return true;
	}

	//Р¤СѓРЅРєС†РёСЏ РїСЂРѕРІРµСЂСЏРµС‚ Р·Р°РїРѕР»РЅРµРЅРѕ Р»Рё РїРѕР»Рµ СЃ С‚РµР»РµС„РѕРЅРѕРј РЅР° С„РѕСЂРјРµ
	//РєР°Р»СЊРєСѓР»СЏС‚РѕСЂР°
	function formValide_calc() {
		var str = $('#calc_form input[name=tel]').val();
		str = jQuery.trim(str);
		if(str.length < 5){
			alert ('Р’РІРµРґРёС‚Рµ С‚РµР»РµС„РѕРЅ');
			return false;
		}
		return true;
	}


	//РїСЂРё РЅР°Р¶Р°С‚РёРё РЅР° РєРЅРѕРїРєСѓ button РЅСѓР¶РЅРѕР№ С„РѕСЂРјС‹ Р·Р°РїСѓСЃРєР°РµРј С„СѓРЅРєС†РёСЋ РѕР±СЂР°Р±РѕС‚РєРё РґР°РЅРЅС‹С…
	$('#contact_form .button').on('click', function() {
		if (formValide()) {
			//РµСЃР»Рё С„РѕСЂРјР° РїСЂРѕС€Р»Р° РїСЂРѕРІРµСЂРєСѓ, РІС‹РІРѕРґРёРј Р±Р»РѕРє СЃ С‚РµРєСЃС‚РѕРј РѕР¶РёРґР°РЅРёСЏ
			$('#contact_form').before('<h3 id="contact_form_info">РћС„РѕСЂРјР»РµРЅРёРµ Р·Р°СЏРІРєРё. РџРѕРґРѕР¶РґРёС‚Рµ...</h3>');
			$('#contact_form').hide();
			//Р±РµСЂРµРј РїСѓС‚СЊ php РѕР±СЂР°Р±РѕС‚С‡РёРєР°
			order_url = $('#contact_form').attr('action');
			//РїРѕСЃС‹Р»Р°РµРј Р°СЃРёРЅС…СЂРѕРЅРЅС‹Р№ Р·Р°РїСЂРѕСЃ РЅР° СЃРµСЂРІРµСЂ Рё РїРµСЂРµРґР°РµРј РІСЃРµ РґР°РЅРЅС‹Рµ С„РѕСЂРјС‹
			$.post(order_url,{
					name: $('#contact_form input[name=name]').val(),
					tel: $('#contact_form input[name=tel]').val(),
                    email: $('#contact_form input[name=email]').val(),
                    message: $('#contact_form textarea[name=message]').val(),
					send: "1"
				}, function(data) {
					//РІС‹РІРѕРґРёРј РІРѕР·РІСЂР°С€Р°РµРјС‹Р№ СЃРµСЂРІРµСЂРѕРј РєРѕРґ html РІРјРµСЃС‚Рѕ СЃРѕРґРµСЂР¶РёРјРѕРіРѕ С„РѕСЂРјС‹
				$('#contact_form').html(data);
				$('#contact_form').show();
				$('#contact_form_info').remove();
			}, "html");
		}
		return false;
	});


	//РїСЂРё РЅР°Р¶Р°С‚РёРё РЅР° РєРЅРѕРїРєСѓ button РЅСѓР¶РЅРѕР№ С„РѕСЂРјС‹ Р·Р°РїСѓСЃРєР°РµРј С„СѓРЅРєС†РёСЋ РѕР±СЂР°Р±РѕС‚РєРё РґР°РЅРЅС‹С…
	//С‚РѕР¶Рµ СЃР°РјРѕРµ, С‚РѕР»СЊРєРѕ РґР»СЏ С„РѕСЂРјС‹ РєР°Р»СЊРєСѓР»СЏС‚РѕСЂР°
	$('#calc_form .button').on('click', function() {
		if (formValide_calc()) {
			//РµСЃР»Рё С„РѕСЂРјР° РїСЂРѕС€Р»Р° РїСЂРѕРІРµСЂРєСѓ, РІС‹РІРѕРґРёРј Р±Р»РѕРє СЃ С‚РµРєСЃС‚РѕРј РѕР¶РёРґР°РЅРёСЏ
			$('#calc_form').before('<h3 id="calc_form_info">РћС„РѕСЂРјР»РµРЅРёРµ Р·Р°СЏРІРєРё. РџРѕРґРѕР¶РґРёС‚Рµ...</h3>');
			$('#calc_form').hide();
			//Р±РµСЂРµРј РїСѓС‚СЊ php РѕР±СЂР°Р±РѕС‚С‡РёРєР°
			order_url = $('#calc_form').attr('action');
			//РїРѕСЃС‹Р»Р°РµРј Р°СЃРёРЅС…СЂРѕРЅРЅС‹Р№ Р·Р°РїСЂРѕСЃ РЅР° СЃРµСЂРІРµСЂ Рё РїРµСЂРµРґР°РµРј РІСЃРµ РґР°РЅРЅС‹Рµ С„РѕСЂРјС‹
			$.post(order_url,{
					name: $('#calc_form input[name=name]').val(),
					tel: $('#calc_form input[name=tel]').val(),
                    email: $('#calc_form input[name=email]').val(),
					send: "1"
				}, function(data) {
					//РІС‹РІРѕРґРёРј РІРѕР·РІСЂР°С€Р°РµРјС‹Р№ СЃРµСЂРІРµСЂРѕРј РєРѕРґ html РІРјРµСЃС‚Рѕ СЃРѕРґРµСЂР¶РёРјРѕРіРѕ С„РѕСЂРјС‹
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
	//С„СѓРЅРєС†РёСЏ РІС‹Р·РѕРІР° С„РѕСЂРјС‹ РѕР±СЂР°С‚РЅРѕР№ СЃРІСЏР·Рё
	$('.callback, .button_call #callback, .zakaz_gel, .send_zayavka').click(function(){
		//РїРѕСЏРІР»РµРЅРёРµ РѕРєРЅР° РѕР±СЂР°С‚РЅРѕР№ СЃРІСЏР·Рё
		$('#popup').fadeIn();
		//РґРѕР±Р°РІР»СЏРµРј Рє РѕРєРЅСѓ РёРєРѕРЅРєСѓ Р·Р°РєСЂС‹С‚РёСЏ
        $('#popup').append('<a id="popup_close"></a>');
		//СЂР°СЃС‡РёС‚С‹РІР°РµРј РІС‹СЃРѕС‚Сѓ Рё С€РёСЂРёРЅСѓ РІСЃРїР»С‹РІР°СЋС‰РµРіРѕ РѕРєРЅР° С‡С‚Рѕ Р±С‹ РІС‹РІРµСЃС‚Рё РѕРєРЅРѕ РїСЂСЏРјРѕ РїРѕ С†РµРЅС‚СЂСѓ СЌРєСЂР°РЅР°
        q_width = $('#popup').outerWidth()/-2;
        q_height = $('#popup').outerHeight()/-2;
        $('#popup').css({
            'margin-left': q_width,
            'margin-top': q_height
        });
		//РІС‹РІРѕРґРёРј Р·Р°С‚РµРјРµРЅРёРµ СЃС‚СЂР°РЅРёС†С‹ Рё РґРµР»Р°РµРј РїРѕР»СѓРїСЂРѕР·СЂР°С‡РЅС‹Рј
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
		return false;
	});

	//Р¤СѓРЅРєС†РёСЏ РІС‹Р·РѕРІР° С„РѕСЂРјС‹ РєР°Р»СЊРєСѓР»СЏС‚РѕСЂР°
	$('.btn_block .calculate, .button_calc .calculate').click(function(){
		//РїРѕСЏРІР»РµРЅРёРµ РѕРєРЅР° РєР°Р»СЊРєСѓР»СЏС‚РѕСЂР°
		$('#calc').fadeIn();

		//С‚СѓС‚ РґРѕР±Р°РІР»СЏРµРј Рє РѕРєРЅСѓ РёРєРѕРЅРєСѓ Р·Р°РєСЂС‹С‚РёСЏ
		$('#calc').append('<a id="calc_close"></a>');
		//СЂР°СЃС‡РёС‚С‹РІР°РµРј РІС‹СЃРѕС‚Сѓ Рё С€РёСЂРёРЅСѓ РІСЃРїР»С‹РІР°СЋС‰РµРіРѕ РѕРєРЅР° С‡С‚Рѕ Р±С‹ РІС‹РІРµСЃС‚Рё РѕРєРЅРѕ РїСЂСЏРјРѕ РїРѕ С†РµРЅС‚СЂСѓ СЌРєСЂР°РЅР°
        q_width = $('#calc').outerWidth()/-2;
        q_height = $('#calc').outerHeight()/-2;
        $('#calc').css({
            'margin-left': q_width,
            'margin-top': q_height
        });

        //РІС‹РІРѕРґРёРј Р·Р°С‚РµРјРµРЅРёРµ СЃС‚СЂР°РЅРёС†С‹ Рё РґРµР»Р°РµРј РїРѕР»СѓРїСЂРѕР·СЂР°С‡РЅС‹Рј
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
		return false;


	});
	//Р¤СѓРЅРєС†РёСЏ РІС‹Р·РѕРІР° С„РѕСЂРјС‹ РєР°Р»СЊРєСѓР»СЏС‚РѕСЂР°


	//С„СѓРЅРєС†РёСЏ Р·Р°РєСЂС‹С‚РёСЏ РѕРєРЅР°
	$('body').on('click','#popup_close, #fade, #calc_close',function(){
		$('#fade').fadeOut(function() {
			$('#fade').remove();
            $('#popup_close').remove();
			$('#popup').fadeOut();

			$('#calc_close').remove();
			$('#calc').fadeOut();			

		});
	});



});