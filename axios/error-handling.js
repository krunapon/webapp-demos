import axios from "axios";

// Example 1: Modern async/await with proper error handling
async function fetchPostsModern() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return { success: true, data: response.data };
  } catch (error) {
    return handleApiError(error);
  }
}

// Example 2: Comprehensive error handler with user-friendly messages
function handleApiError(error) {
  if (error.response) {
    // Server responded with error status (4xx, 5xx)
    const { status, data } = error.response;

    switch (status) {
      case 400:
        return {
          success: false,
          message: "Bad request - check your data",
          error,
        };
      case 401:
        return { success: false, message: "Authentication required", error };
      case 403:
        return { success: false, message: "Access denied", error };
      case 404:
        return { success: false, message: "Resource not found", error };
      case 500:
        return {
          success: false,
          message: "Server error - please try again later",
          error,
        };
      default:
        return {
          success: false,
          message: `Server error: ${status}`,
          error,
        };
    }
  } else if (error.request) {
    // Network error - no response received
    return {
      success: false,
      message: "Network error - check your connection",
      error,
    };
  } else {
    // Request setup error
    return {
      success: false,
      message: "Request configuration error",
      error,
    };
  }
}

// Example 3: With retry mechanism
async function fetchWithRetry(url, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await axios.get(url);
      return { success: true, data: response.data };
    } catch (error) {
      // Only retry on network errors or 5xx server errors
      const shouldRetry = !error.response || error.response.status >= 500;

      if (shouldRetry && attempt < maxRetries) {
        console.log(`Attempt ${attempt} failed, retrying...`);
        await new Promise((resolve) => setTimeout(resolve, 1000 * attempt)); // Exponential backoff
        continue;
      }

      return handleApiError(error);
    }
  }
}

// Usage examples:
fetchPostsModern();
fetchWithRetry("https://jsonplaceholder.typicode.com/posts").then(console.log);
