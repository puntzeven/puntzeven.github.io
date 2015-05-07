<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];

$to = 'mats.punt@live.nl';
$message = 'FROM: '.$name.' Email: '.$email.'Message: '.$message;
$headers = 'From: youremail@domain.com' . "\r\n";

if (filter_var($email, FILTER_VALIDATE_EMAIL)) { // this line checks that we have a valid email address
mail($to, $subject, $message, $headers); //This method sends the mail.
echo "Uw e-mail is verstuurd. Wij zullen zo spoedig mogelijk contact met u opnemen. "; // success message
}else{
echo "Er is een fout opgetreden. Heeft u alle velden ingevoerd en een correct e-mail adres gebruikt?";
}

?>