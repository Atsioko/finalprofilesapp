import React, { useState } from "react";
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

const App = () => {
  const [message, setMessage] = useState("");

  const callTestFunc = async () => {
    try {
      const response = await fetch(
        "https://dhs5cgsdod.execute-api.us-east-2.amazonaws.com/", // Replace with your API Gateway URL
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ key: "value" }), // You can pass data if needed
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      console.log("Lambda Response:", data.message);

      // Set the returned message to display on the frontend
      setMessage(data.message);

    } catch (error) {
      console.error("Error invoking Lambda:", error);
      setMessage("Failed to call the Lambda function.");
    }
  };

  return (
    <div>
      <h1>Lambda Response:</h1>
      <button onClick={callTestFunc}>Call Lambda Function</button>
      <p>{message}</p> {/* Display the message from Lambda here */}
    </div>
  );
};

export default App;
