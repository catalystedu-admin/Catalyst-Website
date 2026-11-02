<?php
/**
 * Free mock-test registration endpoint for GoDaddy / shared PHP hosting.
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

$name = trim((string)($data['name'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$board = strtoupper(trim((string)($data['board'] ?? 'ICSE')));
$source = trim((string)($data['source'] ?? 'free-mock-popup'));

$digits = preg_replace('/\D+/', '', $phone);
$allowedBoards = ['ICSE', 'CBSE', 'WBBSE', 'WBCHSE', 'WBSE'];

if ($name === '' || strlen($digits) < 10 || strlen($digits) > 13) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please provide a valid student name and phone number.']);
    exit;
}

if (!in_array($board, $allowedBoards, true)) {
    $board = 'ICSE';
}
if ($board === 'WBSE') {
    $board = 'WBBSE';
}

$passId = '#CAT-2027-' . random_int(100, 999);

$TO_EMAIL = 'info@catalysteducation.net';
$subject = "Free Mock Test Registration — {$board} — {$passId}";
$body = "New free mock test registration\n\n"
    . "Pass ID: {$passId}\n"
    . "Student: {$name}\n"
    . "Phone: {$phone}\n"
    . "Board: {$board}\n"
    . "Source: {$source}\n";

$headers = [
    'From: noreply@catalysteducation.net',
    'Reply-To: noreply@catalysteducation.net',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($TO_EMAIL, $subject, $body, implode("\r\n", $headers));

$logDir = __DIR__ . '/../storage';
if (!is_dir($logDir)) {
    @mkdir($logDir, 0755, true);
}
@file_put_contents(
    $logDir . '/registrations.log',
    date('c') . "\t{$passId}\t{$name}\t{$phone}\t{$board}\n",
    FILE_APPEND | LOCK_EX
);

echo json_encode(['ok' => true, 'passId' => $passId]);
