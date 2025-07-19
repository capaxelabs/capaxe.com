import type { APIRoute } from "astro";

export const runtime = "edge";

export const prerender = false;

interface CloudflareTurnstileResponse {
    success: boolean;
    "error-codes": string[];
    challenge_ts: string;
    hostname: string;
}

export const POST: APIRoute = async ({ request }) => {
    const json = await request.json();
    const token = json.token;

    console.log("token", json);
    const formData = new URLSearchParams();
    formData.append("secret", process.env.TURNSTILE_SECRET_KEY!);
    formData.append("response", token);

    const url = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    const result = await fetch(url, {
        body: formData,
        method: "POST",
    });

    const outcome: CloudflareTurnstileResponse = await result.json();
    if (outcome.success) {
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
        return new Response(JSON.stringify({ success: false, "error-codes": outcome["error-codes"] }), { status: 400 });
    }
}
