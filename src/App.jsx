import { useState } from 'react'
import './App.css'
/** 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Start Page</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Rn this is count but it will be a button for a function {count}
        </button>
      </div>
    </>
  )
}

export default App
*/

const App = () => {
    // Function to call the Lambda function
    const callTestFunc = async () => {
        try {
            const response = await fetch(
                "https://dhs5cgsdod.execute-api.us-east-2.amazonaws.com/", // Replace with your API Gateway endpoint
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ key: "value" }), // Update payload as needed
                }
            );
            const data = await response.json();
            console.log("Response from Lambda:", data);
            alert(`Lambda Response: ${JSON.stringify(data)}`);
        } catch (error) {
            console.error("Error invoking Lambda:", error);
            alert("Failed to call the Lambda function.");
        }
    };

    return (
        <div>
            <h1>Welcome to the App</h1>
            <button onClick={callTestFunc}>Call Lambda Function</button>
        </div>
    );
};

export default App;
