import { NextResponse } from 'next/server';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000';

export async function POST(request: Request) {
  const body = await request.json();

  let requestOptions: { method: string; headers: { 'Content-Type': string }; body?: any } = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (body) {
    requestOptions = {
      ...requestOptions,
      body: body,
    };
  }

  console.log(`\nurl:${BASE_URL}/post\nrequest:${requestOptions}`);

  const result = await fetch(`${BASE_URL}/post`, requestOptions)
    .then(res => res.json())
    .then(data => {
      return data;
    });
  console.log('\nresult data:', result);

  return NextResponse.json(result);
}
