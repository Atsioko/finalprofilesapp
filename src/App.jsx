import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  // State to store stock data and user input
  const [singleStock, setSingleStock] = useState('');
  const [multipleStocks, setMultipleStocks] = useState('');
  const [stockUpdate, setStockUpdate] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');

  // API Gateway URL (replace with your API Gateway endpoint)
  const apiUrl = "https://dhs5cgsdod.execute-api.us-east-2.amazonaws.com/";

  // Function to get a single stock
  const getSingleStock = async () => {
    try {
      const result = await axios.get(`${apiUrl}/get-stock`, {
        params: { stockSymbol: singleStock },
      });
      setResponse(result.data);
      setError('');
    } catch (err) {
      setError('Error fetching stock data');
      setResponse(null);
    }
  };

  // Function to get multiple stocks
  const getMultipleStocks = async () => {
    try {
      const result = await axios.get(`${apiUrl}/get-multiple-stocks`, {
        params: { stockSymbols: multipleStocks },
      });
      setResponse(result.data);
      setError('');
    } catch (err) {
      setError('Error fetching stock data');
      setResponse(null);
    }
  };

  // Function to update a stock
  const updateStock = async () => {
    try {
      const result = await axios.post(`${apiUrl}/update-stock`, {
        stockSymbol: stockUpdate,
      });
      setResponse(result.data);
      setError('');
    } catch (err) {
      setError('Error updating stock data');
      setResponse(null);
    }
  };

  return (
    <div>
      <h1>Stock Tracker</h1>
      
      {/* Get single stock */}
      <div>
        <h2>Get Single Stock</h2>
        <input
          type="text"
          value={singleStock}
          onChange={(e) => setSingleStock(e.target.value)}
          placeholder="Enter stock symbol"
        />
        <button onClick={getSingleStock}>Get Stock</button>
      </div>
      
      {/* Get multiple stocks */}
      <div>
        <h2>Get Multiple Stocks</h2>
        <input
          type="text"
          value={multipleStocks}
          onChange={(e) => setMultipleStocks(e.target.value)}
          placeholder="Enter stock symbols, comma separated"
        />
        <button onClick={getMultipleStocks}>Get Stocks</button>
      </div>

      {/* Update stock */}
      <div>
        <h2>Update Stock</h2>
        <input
          type="text"
          value={stockUpdate}
          onChange={(e) => setStockUpdate(e.target.value)}
          placeholder="Enter stock symbol to update"
        />
        <button onClick={updateStock}>Update Stock</button>
      </div>

      {/* Display response or error */}
      <div>
        {response && (
          <div>
            <h3>Response:</h3>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </div>
    </div>
  );
};

export default App;
