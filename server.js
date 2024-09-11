// Example using Express.js
const express = require('express');
const app = express();

// Example defining a route in Express
app.get('/', async (req, res) => {
    try {
      const response = await fetch("https://api.notion.com/v1/databases/871802c3c1bf43aab97795626d4dbd87/query", {
        method: "POST",
        headers: {
          'Authorization': 'Bearer secret_p1lgOW4I19gDNJWYnWs0jtHR2grKLfVDCTWtH49bt2W',
          'Content-Type': 'application/json',
          'Notion-Version': '2022-06-28'
        }
      });
      
      const data = await response.json();
      
      // Send the JSON data back to the client in a readable format
      res.send(`<h1>Response Data:</h1><pre>${JSON.stringify(data, null, 2)}</pre>`);
      
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('An error occurred');
    }
  });

const port = process.env.PORT || 3000; // You can use environment variables for port configuration
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});