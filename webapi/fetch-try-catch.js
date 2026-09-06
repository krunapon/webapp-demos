async function showLocation() {
  try {
    const args = process.argv.slice(2); // drop node + script path
    const userId = args[0];
    const response = await fetch(`https://api.github.com/users/${userId}`);
    if (!response.ok) throw new Error("Network response was not ok");
    const userData = await response.json();
    if (!userData.name) throw new Error(`Invalid user ID ${userId}`);
    console.log(userData.name + " lives in " + userData.location);
  } catch (err) {
    console.log(`Fetch Error: ${err}`);
  }
}
showLocation();
