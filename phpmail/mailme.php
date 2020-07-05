<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    // define variables and set to empty values
    $fname = $lname = $email = $content = ""; 

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $fname = $_POST["firstname"];
        $lname = $_POST["lastname"];
        $email = $_POST["email"];
        $content = $_POST["content"];
    }
    
    //Server settings
    $mail->SMTPDebug = 0;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'rinat.sharifullin.a@gmail.com';                     // SMTP username
    $mail->Password   = 'yshdvkkjapmxuvqy';                               // SMTP password
    $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->addReplyTo($email, $fname . ' ' . $lname);
    $mail->setFrom($email, 'From ' . $fname . ' ' . $lname);
    $mail->addAddress('rinat.sharifullin@yahoo.com');     // Add a recipient





    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Email From '. $fname . ' ' . $lname . ' RinatPortfolio Form';
    $mail->Body    = 'Hi. My name '.$fname . ' ' . $lname.'. My Email is '.$email.' '. $content;
    $mail->AltBody = 'Hi. My name '.$fname . ' ' . $lname.'. My Email is '.$email.' '. $content;

    $mail->send();
    header('Location:../result.html');
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}