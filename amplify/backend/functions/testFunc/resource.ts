import { API, Function } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import { CfnOutput } from 'aws-cdk-lib';

// Export the function and API Gateway resources for the Lambda function
export const testFunc = new Function('testFunc', {
  runtime: 'nodejs18.x', // Choose the Node.js runtime or another runtime
  handler: './handler', // Define the entry point of the Lambda function
  permissions: {
    api: {
      allowed: true, // Allow this Lambda to be called via API Gateway
      methods: ['POST'], // Enable POST method for API Gateway
    },
  },
  environment: {
    // Define environment variables for your Lambda function, if needed
    API_ENDPOINT: 'https://dhs5cgsdod.execute-api.us-east-2.amazonaws.com/',
  },
});

/**
// Optionally, expose the API Gateway endpoint as an output for reference
export const apiEndpoint = new CfnOutput(this, 'ApiEndpoint', {
  value: `https://${apiId}.execute-api.${region}.amazonaws.com/dev/testFunc`,
  description: 'The API endpoint that triggers the testFunc Lambda',
}
);
*/