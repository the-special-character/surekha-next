export async function GET(request: Request) {
  // Using the request parameter to include the method in the response
  return new Response(`Hello, Next.js! Method: ${request.method}`, {
    status: 200,
  });
}
