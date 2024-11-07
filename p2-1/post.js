class Post {
  constructor(userId, id, title, body) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }

  renderPost(container) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
        <h3>User ID: ${this.userId}, Post ID: ${this.id}</h3>
        <h2>${this.title}</h2>
        <p>${this.body}</p>
      `;
    container.appendChild(postDiv);
  }
}
