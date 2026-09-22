const express = require("express");

const app = express();
const port = 3004;

// Middleware
app.use(express.json());

// Import router
const router = require("./routs");
console.log(router);
console.log(typeof router);

// Use router
app.use("/api", router);

// Start server
app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});