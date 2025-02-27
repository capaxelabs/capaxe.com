/**
 * This is a simple test script to diagnose issues with the mail worker
 * Run it with: npx tsx src/examples/test-mail-worker.ts
 */

async function testMailWorker() {
    console.log('Testing mail worker...');

    // Create a simple FormData object with minimal data
    const formData = new FormData();
    formData.append('to', 'mukesh@capaxe.com');
    formData.append('from', 'anita@capaxe.com');
    formData.append('subject', 'Test Email');
    formData.append('html', '<html><body><h1>Test Email</h1><p>This is a test email.</p></body></html>');

    const requestOptions = {
        method: "POST",
        body: formData,
        redirect: "follow" as RequestRedirect
    };

    try {
        console.log('Sending request to mail worker...');

        // Make the request
        const response = await fetch('https://mail-worker.capaxe.workers.dev', requestOptions);

        console.log(`Response status: ${response.status} ${response.statusText}`);

        // Log response headers
        const headers: Record<string, string> = {};
        response.headers.forEach((value, key) => {
            headers[key] = value;
        });
        console.log('Response headers:', headers);

        // Get the response text
        const text = await response.text();
        console.log(`Response body (${text.length} chars):`, text);

        // Try to parse as JSON
        if (text) {
            try {
                const json = JSON.parse(text);
                console.log('Parsed JSON:', json);
            } catch (e) {
                console.log('Response is not valid JSON');
            }
        } else {
            console.log('Response body is empty');
        }

        console.log('Test completed');
    } catch (error) {
        console.error('Error testing mail worker:', error);
    }
}

// Run the test
testMailWorker(); 