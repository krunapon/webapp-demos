const createTodo = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        title: "Fix my bugs",
        completed: false,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const todo = await response.json();
    console.log(todo);
  } catch (err) {
    console.error("Failed to create todo:", err);
  }
};
createTodo();
