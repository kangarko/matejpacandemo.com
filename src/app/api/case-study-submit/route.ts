import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email } = body;

        // Validate inputs
        if (!name || !email)
            return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });

        // Validate name format (allowing non-English alphabets)
        const nameRegex = /^[\p{L}\s'-]+$/u;
        if (!nameRegex.test(name))
            return NextResponse.json({ error: 'Invalid name format' }, { status: 400 });

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email))
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });

        // Get webhook URL from environment variable
        const webhookUrl = process.env.MAKE_WEBHOOK_URL;

        // If webhook URL is not configured, return success
        if (!webhookUrl)
            return NextResponse.json({ success: true });

        // Forward to Make.com webhook
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name.trim(),
                email: email.trim(),
                timestamp: new Date().toISOString(),
                source: 'case-study-form'
            }),
        });

        if (!response.ok)
            throw new Error(`Make.com webhook failed with status: ${response.status}`);

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Error submitting to Make.com:', error);
        return NextResponse.json(
            { error: 'Failed to submit form. Please try again.' },
            { status: 500 }
        );
    }
}
