<?php
$name = $_POST['name'];
$tel = $_POST['tel'];
$question = $_POST['question'];

$name = htmlspecialchars($name);
$tel = htmlspecialchars($tel);
$question = htmlspecialchars($question);


$name = urldecode($name);
$tel = urldecode($tel);
$question = urldecode($question);


$name = trim($name);
$tel = trim($tel);
$question = trim($question);

$message = '';
$message .= 'Имя: ' . $name . PHP_EOL;
$message .= 'Телефон: ' . $tel . PHP_EOL;
$message .= 'Вопрос: ' . $question . PHP_EOL;


$sended = mail(
    "tadmin@avrora.ru",
    "Заявка на курс",
    $message,
    "From: admin@avrora.ru \r\n"
);

if ($sended) {
    echo "Заявка успешно отправлена, ожидайте звонка!";
} else {
    echo "Извините, при отправке формы возникла ошибка";
}
?>