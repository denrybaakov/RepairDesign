<?php
  
  $userName = $_POST['userName'];
  $userPhone = $_POST['userPhone'];
  $userEmail = $_POST['userEmail'];
  $userQuestion = $_POST['userQuestion'];


// Load Composer's autoloader
require 'phpMailer/Exception.php';
require 'phpMailer/PHPMailer.php';
require 'phpMailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'testovich.glo@gmail.com';                     // SMTP username
    $mail->Password   = '2468097531test';                               // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('testovich.glo@gmail.com', 'Denrybaakov');
    $mail->addAddress('rybakov22denis@yandex.ru');     // Add a recipient



    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Новая заявка сайта';
    $mail->Body    = "Имя пользователя: ${userName} <br> Номер телефона: ${userPhone} <br> Почта ${userEmail} <br> Вопрос: ${userQuestion} <br>";

    $mail->send();
    header('Location: thanks.html');
} catch (Exception $e) {
    echo "Ошибка отправки сообщения: {$mail->ErrorInfo}";
}



?>