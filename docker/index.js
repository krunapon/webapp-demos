import express from "express";
const app = express();

// Read environment variables
const appName = process.env.APP_NAME;
const welcomeMessage = process.env.WELCOME_MESSAGE;
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`
    <h1>${appName}</h1>
    <p>${welcomeMessage}</p>
    <p>Running on port: ${port}</p>
  `);
});

app.listen(port, () => {
  console.log(`${appName} is running on http://localhost:${port}`);
});
