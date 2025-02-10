export async function sendEmail(
  emailHtml: string,
  to: string,
  subject: string,
  attachments: File[] = [],
  cc?: string
) {
  const formData = new FormData();
  formData.append('to', to);
  formData.append('from', process.env.SMTP_FROM || '');
  formData.append('subject', subject);
  formData.append('html', emailHtml);

  if (cc) {
    formData.append('cc', cc);
  }

  // Add attachments if any
  attachments.forEach((file) => {
    formData.append('attachments', file);
  });

  const response = await fetch('https://mail-worker.m4k.workers.dev', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Failed to send email: ${response.statusText}`);
  }

  return await response.json();
}
