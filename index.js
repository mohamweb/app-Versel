// index.js

const express = require("express")
// const {render} = require("ejs")
const app = express()
const PORT = 4000 || process.env.port;


app.get('/', (req, res) => {
  // res.status(200).json('Welcome, your app is working well');
  res.send("<h1>Welcome, your app is working well</h1>");
  // res.sendFile(__dirname +"/views/Cruds.html")
  // res.render("Cruds.ejs");
})


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
// module.exports = app