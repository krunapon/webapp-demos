// jwt-demo.mjs   Run: node --env-file=.env jwt-demo.mjs
import express from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";

const app = express();
app.use(cookieParser());

// Demo login: issues a token (password check omitted)
app.post("/login", (req, res) => {
  const token = jwt.sign(
    { id: 1, email: "a@kku.ac.th" },
    process.env.JWT_SECRET,
    { algorithm: "HS256", expiresIn: "1h" },
  );
  res.cookie("token", token, { httpOnly: true, sameSite: "strict" }); // add secure: true on HTTPS
  res.json({ message: "Logged in" });
});

const requireAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ error: "Not logged in" });
  }
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET, {
      algorithms: ["HS256"],
    });
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: "Invalid or expired token" });
  }
};

app.get("/profile", requireAuth, (req, res) => res.json(req.user));

app.listen(3000, () => console.log("http://localhost:3000"));
