class PostManager {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.posts = [];
  }

  async fetchPosts() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error("Packet lost due to your internet connection.");
      }
      const data = await response.json();
      this.posts = data.map(
        (post) => new Post(post.userId, post.id, post.title, post.body)
      );
      this.renderPosts();
      this.renderStatistics();
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  renderPosts() {
    const postContainer = document.getElementById("posts-container");
    postContainer.innerHTML = "";
    this.posts.forEach((post) => post.renderPost(postContainer));
  }

  renderStatistics() {
    const postStatistics = document.getElementById("post-statistics");
    postStatistics.innerHTML = "";

    const totalPosts = this.posts.length;
    const totalBodyLength = this.posts.reduce(
      (sum, post) => sum + post.body.length,
      0
    );
    const averageLength =
      totalPosts > 0 ? (totalBodyLength / totalPosts).toFixed(2) : 0;

    const userPosts = this.posts.reduce((acc, post) => {
      acc[post.userId] = (acc[post.userId] || 0) + 1;
      return acc;
    }, {});

    const summaryDiv = document.createElement("div");
    summaryDiv.classList.add("statistics");
    summaryDiv.innerHTML = `
        <h2>Statistics</h2>
        <p>Total number of posts: ${totalPosts}</p>
        <p>Average post length: ${averageLength} characters</p>
      `;
    postStatistics.appendChild(summaryDiv);

    const statsTable = document.createElement("table");
    statsTable.innerHTML = `
        <tr>
          <th>User ID</th>
          <th>Post Count</th>
        </tr>
      `;
    for (const userId in userPosts) {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${userId}</td>
          <td>${userPosts[userId]}</td>
        `;
      statsTable.appendChild(row);
    }
    postStatistics.appendChild(statsTable);
  }
}
