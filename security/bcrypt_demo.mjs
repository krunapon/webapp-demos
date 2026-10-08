// bcrypt-demo.mjs   Run: npm i bcrypt && node bcrypt-demo.mjs
import bcrypt from "bcrypt";

const users = {}; // stand-in for the users table

// Registration: store only the hash
async function register(email, password) {
  users[email] = await bcrypt.hash(password, 12);
}

// Login: same message for wrong email OR wrong password
async function login(email, password) {
  const hash = users[email];
  const ok = hash && (await bcrypt.compare(password, hash));
  return ok ? "200 Login OK" : "401 Invalid email or password";
}

await register("a@kku.ac.th", "secret123");
console.log(users); // only the hash is stored
console.log(await login("a@kku.ac.th", "secret123")); // 200
console.log(await login("a@kku.ac.th", "wrong")); // 401
console.log(await login("b@kku.ac.th", "secret123")); // 401
