import express from "express";
import bcrypt from "bcrypt";
import rateLimit from "express-rate-limit";

const app = express();
app.use(express.json({ limit: "10kb" }));

const SALT_ROUNDS = 12;
const PORT = 3000;
const MAX_PASSWORD_BYTES = 72; // bcrypt ignores bytes after the first 72

const users = [];

const findUserByEmail = async (email) => users.find((u) => u.email === email);

const normalizeEmail = (email) => email.trim().toLowerCase();

// Compared against when the email is unknown, so both cases take similar time
let DUMMY_HASH;

const seedUsers = async () => {
  const passwordHash = await bcrypt.hash("secret123", SALT_ROUNDS);
  users.push({ id: 1, email: "kanda@kku.ac.th", password_hash: passwordHash });
  DUMMY_HASH = await bcrypt.hash("dummy-password", SALT_ROUNDS);
};

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 5, // 5 attempts per IP per window
  message: { error: "Too many login attempts. Try again later." },
});

app.post("/api/login", loginLimiter, async (req, res) => {
  const { email, password } = req.body ?? {};

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    email.length === 0 ||
    email.length > 254 ||
    password.length === 0 ||
    Buffer.byteLength(password) > MAX_PASSWORD_BYTES
  ) {
    return res.status(400).json({ error: "Invalid email or password format" });
  }

  try {
    const normalized = normalizeEmail(email);
    const user = await findUserByEmail(normalized);
    const hash = user ? user.password_hash : DUMMY_HASH;
    const match = await bcrypt.compare(password, hash);

    if (!user || !match) {
      console.warn(`Failed login for ${normalized} from ${req.ip}`);
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
