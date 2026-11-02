<?php
/**
 * Contact enquiry endpoint for GoDaddy / shared PHP hosting.
 * Configure $TO_EMAIL if your inbox differs.
 */
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Honeypot — bots fill "company"; humans never see it.
$honeypot = trim((string)($data['company'] ?? ''));
if ($honeypot !== '') {
    echo json_encode(['ok' => true, 'queued' => true]);
    exit;
}

$name = trim((string)($data['name'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$board = strtoupper(trim((string)($data['board'] ?? '')));
$studentClass = trim((string)($data['studentClass'] ?? $data['class'] ?? ''));
$source = trim((string)($data['source'] ?? 'contact-form'));

$digits = preg_replace('/\D+/', '', $phone);

if ($name === '' || $message === '' || strlen($digits) < 10 || strlen($digits) > 13) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please provide a valid name, phone, and message.']);
    exit;
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please provide a valid email address or leave it blank.']);
    exit;
}

$allowedBoards = ['ICSE', 'CBSE', 'WBBSE', 'WBCHSE', 'CLASS12', 'OTHER', 'ISC', ''];
if (!in_array($board, $allowedBoards, true)) {
    $board = 'OTHER';
}
if ($board === 'ISC') {
    $board = 'ICSE';
}

$TO_EMAIL = 'info@catalysteducation.net';
$subject = 'Website Enquiry — Catalyst Education';
$body = "New enquiry from the Catalyst Education website\n\n"
    . "Name: {$name}\n"
    . "Phone: {$phone}\n"
    . "Email: " . ($email !== '' ? $email : '(not provided)') . "\n"
    . "Board: " . ($board !== '' ? $board : '(not provided)') . "\n"
    . "Class: " . ($studentClass !== '' ? $studentClass : '(not provided)') . "\n"
    . "Source: {$source}\n\n"
    . "Message:\n{$message}\n";

$headers = [
    'From: noreply@catalysteducation.net',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];
if ($email !== '') {
    $headers[] = 'Reply-To: ' . $email;
} else {
    $headers[] = 'Reply-To: noreply@catalysteducation.net';
}

$sent = @mail($TO_EMAIL, $subject, $body, implode("\r\n", $headers));

$logDir = __DIR__ . '/../storage';
if (!is_dir($logDir)) {
    @mkdir($logDir, 0755, true);
}
@file_put_contents(
    $logDir . '/contact-leads.log',
    date('c') . "\t{$name}\t{$phone}\t{$email}\t{$board}\t{$studentClass}\t" . str_replace(["\r", "\n"], ' ', $message) . "\tmail=" . ($sent ? '1' : '0') . "\n",
    FILE_APPEND | LOCK_EX
);

echo json_encode([
    'ok' => true,
    'delivered' => (bool)$sent,
    'message' => $sent
        ? 'Enquiry received. Our desk will call you shortly.'
        : 'Enquiry saved. If you do not hear back soon, please WhatsApp or call +91 91631 94805.',
]);
