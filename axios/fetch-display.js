// Function to fetch and display users
async function fetchAndDisplayUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const users = response.data;
    const userList = document.getElementById("output");

    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`;
      userList.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    const errorMsg = document.createElement("p");
    errorMsg.textContent = "Failed to load users. Please try again later.";
    document.getElementById("app").appendChild(errorMsg);
  }
}
fetchAndDisplayUsers();
