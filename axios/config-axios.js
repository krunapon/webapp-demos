import axios from "axios";
// Example 1: Simple POST request (recommended approach)
async function createPost() {
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      {
        title: "Learning Axios",
        body: "This is a sample post for web development class",
        userId: 1,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Created post:", response.data);
    return response.data;
  } catch (error) {
    console.error("Request failed:", error.response?.data || error.message);
  }
}

// Example 2: Using configuration object (for comparison)
async function createPostWithConfig() {
  const config = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/posts",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      title: "Config Example",
      body: "Using configuration object",
      userId: 1,
    },
  };

  try {
    const response = await axios(config);
    console.log("Created post (config method):", response.data);
  } catch (error) {
    console.error("Request failed:", error.response?.data || error.message);
  }
}

// Demonstrate both approaches
createPost();
createPostWithConfig();
