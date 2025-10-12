import axios from "axios";

// Notice how camelCase makes the function name readable as natural language
async function fetchPostsFromAPI() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const posts = response.data; // More descriptive than 'results'

    // Display each post's basic information
    for (const post of posts) {
      console.log(`Post ${post.id}: ${post.title}`);
    }
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
}

fetchPostsFromAPI();
