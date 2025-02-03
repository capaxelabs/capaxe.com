import { NextRequest, NextResponse } from "next/server";

interface CloudflareTurnstileResponse {
    success: boolean;
    "error-codes": string[];
    challenge_ts: string;
    hostname: string;
}

export async function POST(req: NextRequest) {
    const json = await req.json();
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
        return NextResponse.json({ success: true });
    } else {
        return NextResponse.json({ success: false, "error-codes": outcome["error-codes"] }, { status: 400 });
    }
}
