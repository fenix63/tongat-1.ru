<?php
	header('Content-type: text/html; charset=utf-8;');
	
	header('Status: 301 Moved Permanently');
	header('Location: http://tongat-1.ru');//Редирект на главную страницу
	//error_reporting(0);   

//if(!empty($_POST['send'])) {
if(!empty($_POST['email'])) {

	$name = substr(htmlspecialchars(trim($_POST['name'])), 0, 300);
	$tel = substr(htmlspecialchars(trim($_POST['phone'])), 0, 100);
    $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
    //$message = substr(htmlspecialchars(trim($_POST['message'])), 0, 3000);
	
	$ip = $_SERVER['REMOTE_ADDR'];

	$Nzakaz = rand(10000, 99999);

	$mess  = "Имя: <b>".$name."</b><br />";
	$mess .= "Телефон: <b>".$tel."</b><br />";
    $mess .= "Email: <b>".$email."</b><br />";
    //$mess .= "Сообщение: <b>".$message."</b><br />";
	
	$theme = "Заявка на Тонгат";

	//if(mail("youran198824@gmail.com", $theme, $mess, "From: test@учеба.top <test@учеба.top>\nContent-Type: text/html;\n charset=utf-8\nX-Priority: 0"))
	if(mail("fenix_63@mail.ru", $theme, $mess,"Content-Type: text/html;\n charset=utf-8\nX-Priority: 0"))
	{
	
	
		echo "<h3>Заявка удачно оформлена.</h3>";
		echo "<p>Заявке присвоен номер Z".$Nzakaz.". Наш менеджер свяжется с вами в ближайшее время.</p>";
		
	}
	else
	{
		echo "error";
	}
        
    }
else {
	
	echo "<h2>Ошибка! Попробуйте еще раз.</h2>\n\r";
	echo $_POST['email'];
	
}
	
?>