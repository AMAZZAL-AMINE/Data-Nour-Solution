<?php

  //ENTER THE NAME OF THE FILE INTO WHICH YOU WOULD LIKE TO SAVE THE EMAIL ADDRESSES OF SUBSCRIBERS
  $emailsFile = 'lib/email-list.csv';

  //ENTER YOUR EMAIL ADDESS TO GET NOTIFIED EVERY TIME A SUBSCRIPTION IS DONE BY THE VISITORS.
  $myEmail = '';


  ob_start();

  function response($responseStatus, $responseMsg) {
    $out = json_encode(array('status' => $responseStatus, 'msg' => $responseMsg));

    ob_end_clean();
    die($out);
  }

  // AJAX CALLBACK
  if (!isset($_SERVER['X-Requested-With']) && !isset($_SERVER['HTTP_X_REQUESTED_WITH'])) {
    response(false, 'ajax');
  }

  // ERROR SYNTAX WHEN REQUITED EMAILS FILE CANNOT READ or WRITE.
  if (($file = fopen($emailsFile, 'r+')) == false) {
    response(false, 'fileopen');
  }

  $emailAddress = trim(strtolower($_POST['subscribeEmail']));
  
  // ERROR SYNTAX FOR INVALID EMAIL ADDRESS
  if(!isset($emailAddress) || !trim($emailAddress)) {
    response(false, 'email-required');
  }
  if(!isset($emailAddress) || !preg_match('/^[^@]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/', trim($emailAddress))) {
    response(false, 'email-err');
  }

  // DUPLICATING ENTRY
  while($line = fgets($file)) {
    $line = explode(' ', trim($line));
    $email = $line[0];
    if ($email == $emailAddress) {
      response(false, 'duplicate');
    }
  }//END WHILE

  // WRITE EMAIL TO FILE
  fseek($file, 0, SEEK_END);
  if (fwrite($file, $emailAddress . PHP_EOL) == strlen($emailAddress . PHP_EOL)) {
	
    if (preg_match('/^[^@]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/', trim($myEmail))) {
        $headers  = "MIME-Version: 1.0 \n";
        $headers .= "Content-type: text/plain; charset=UTF-8 \n";
        $headers .= "X-Mailer: PHP " . PHP_VERSION . "\n";
        $headers .= "From: {$myEmail} \n";
        $headers .= "Return-Path: {$myEmail} \n";
        $message = 'The following person was kind enough to subscribe to your newsletter:' . PHP_EOL . $name . ' - ' . $emailAddress;
        @mail($myEmail, 'You have a new newsletter subscriber', $message, $headers);
    }
    response(true, 'subscribed');
  } else {
    response(false, 'filewrite');
  }

  response(false, 'undefined');
?>