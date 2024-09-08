import { NextResponse } from "next/server";

// This will handle POST requests
export async function POST(request: Request) {
  const { firstName, surName, email, message } = await request.json();

  console.log({ firstName, surName, email, message });

  // You can add your logic here (e.g., saving the data or sending an email)

  return NextResponse.json(
    { message: "Form submitted successfully!" },
    { status: 200 }
  );
}
