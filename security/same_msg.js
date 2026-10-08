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
