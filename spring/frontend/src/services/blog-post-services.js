export const getAllBlogPosts = async () => {
  const response = await fetch("http://localhost:8080/posts");
  if (!response.ok) {
    throw new Error("Failed to get posts");
  }
  const data = await response.json();
  return data;
};

export const getBlogPostById = async (id) => {
  const response = await fetch(`http://localhost:8080/posts/${id}`);
  if (!response.ok) {
    throw new Error("Failed to get posts");
  }
  const data = await response.json();
  return data;
};

export const createNewBlogPost = async (data) => {
  return await fetch(`http://localhost:8080/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.warn(error));
};

export const updateBlogPost = async (id, data) => {
  return await fetch(`http://localhost:8080/posts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => console.warn(error));
};

export const deleteBlogPost = async (id) => {
  return await fetch(`http://localhost:8080/posts/${id}`, {
    method: "DELETE",
    // headers: { "Content-Type": "application/json" },
    // body: JSON.stringify(data),
  })
    // .then((response) => response.json())
    .catch((error) => console.warn(error));
};
