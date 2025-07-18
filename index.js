// index.js
const express = require('express')
const app = express()
const PORT = 4000 || process.env.port;


app.get('/home', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
  res.render("form.ejs")
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app