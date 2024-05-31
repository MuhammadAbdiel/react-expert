/* istanbul ignore file */

const api = (() => {
  const BASE_URL = "https://jsonplaceholder.typicode.com";

  async function getPosts() {
    const response = await fetch(`${BASE_URL}/posts`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseJson = await response.json();

    const posts = responseJson;

    return posts;
  }

  async function getPostById(id) {
    const response = await fetch(`${BASE_URL}/posts/${id}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseJson = await response.json();

    const post = responseJson;

    return post;
  }

  return {
    getPosts,
    getPostById,
  };
})();

export default api;
