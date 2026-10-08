import express from "express";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());

const SALT_ROUNDS = 12;
const PORT = 3000;

// In-memory "database" (replace with PostgreSQL in a real app)
const users = [];

const findUserByEmail = async (email) => users.find((u) => u.email === email);

// Create a demo user with a hashed password
const seedUsers = async () => {
  const passwordHash = await bcrypt.hash("secret123", SALT_ROUNDS);
  users.push({ id: 1, email: "kanda@kku.ac.th", password_hash: passwordHash });
};

app.post("/api/login", async (req, res) => {
  console.log("Login attempt:", req.body); // includes the password!
  const { email, password } = req.body ?? {};

  if (typeof email !== "string" || typeof password !== "string") {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const user = await findUserByEmail(email);
    const match = user
      ? await bcrypt.compare(password, user.password_hash)
      : false;

    if (!match) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    res.json({ message: "Login successful", userId: user.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

await seedUsers();
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
