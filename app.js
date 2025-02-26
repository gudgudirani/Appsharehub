document.addEventListener("DOMContentLoaded", function() {
  // Replace with your Render backend URL
  const backendURL = "https://adsshareearn-app.onrender.com/backend_main.py";
  fetch(`${backendURL}/posts`)
    .then(response => response.json())
    .then(data => {
      let postsDiv = document.getElementById("posts");
      data.posts.forEach(post => {
        let postEl = document.createElement("div");
        postEl.className = "post";
        postEl.innerHTML = `<h3>${post.username}</h3>
                            <p>${post.content}</p>
                            <small>Likes: ${post.likes} | Dislikes: ${post.dislikes}</small>`;
        postsDiv.appendChild(postEl);
      });
    })
    .catch(error => console.error("Error fetching posts:", error));
});
