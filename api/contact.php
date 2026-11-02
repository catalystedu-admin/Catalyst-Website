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

$name = trim((string)($data['name'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$source = trim((string)($data['source'] ?? 'contact-form'));

$digits = preg_replace('/\D+/', '', $phone);

if ($name === '' || $message === '' || strlen($digits) < 10 || strlen($digits) > 13) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'Please provide a valid name, phone, and message.']);
    exit;
}

$TO_EMAIL = 'info@catalysteducation.net';
$subject = 'Website Enquiry — Catalyst Education';
$body = "New enquiry from the Catalyst Education website\n\n"
    . "Name: {$name}\n"
    . "Phone: {$phone}\n"
    . "Source: {$source}\n\n"
    . "Message:\n{$message}\n";

$headers = [
    'From: noreply@catalysteducation.net',
    'Reply-To: noreply@catalysteducation.net',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($TO_EMAIL, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    // Still acknowledge on hosts where mail() is restricted; log locally for follow-up.
    $logDir = __DIR__ . '/../storage';
    if (!is_dir($logDir)) {
        @mkdir($logDir, 0755, true);
    }
    @file_put_contents(
        $logDir . '/contact-leads.log',
        date('c') . "\t{$name}\t{$phone}\t" . str_replace(["\r", "\n"], ' ', $message) . "\n",
        FILE_APPEND | LOCK_EX
    );
}

echo json_encode(['ok' => true]);
