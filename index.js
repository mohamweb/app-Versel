// index.js

const express = require("express")
const ejs = require("ejs")
const app = express()
const PORT = 4000 || process.env.port;


app.get('/', (req, res) => {
  // res.status(200).json('Welcome, your app is working well');
  res.render("Cruds.ejs");
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app