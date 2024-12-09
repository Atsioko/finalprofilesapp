import type { Handler } from 'aws-lambda';
exports.handler = async (event: any) => {
    console.log("Received event:", event);  // Logs the incoming request for debugging
  
    // Logic to generate the response string
    const message = "Hello from Lambda!";
  
    return {
      statusCode: 200, // HTTP status code
      body: JSON.stringify({ message }), // Return the message in the body
    };
  };
  