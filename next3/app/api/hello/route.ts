import { NextResponse } from "next/server";

export async function GET(request: Request) {

  return NextResponse.error("Something went wrong").json()

}
