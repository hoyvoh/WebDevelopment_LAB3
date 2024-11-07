class UserManager {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
    this.users = [];
  }

  async fetchUsers() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error("Network issue, please try again.");
      }
      const data = await response.json();
      this.users = data.map(
        (user) =>
          new User(
            user.id,
            user.name,
            user.username,
            user.email,
            user.address,
            user.phone,
            user.website,
            user.company
          )
      );
      this.displayUsers(this.users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  displayUsers(users) {
    const userContainer = document.getElementById("users-container");
    userContainer.innerHTML = "";

    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
          <h3>Username: ${user.username}</h3>
          <p>Email: ${user.email}</p>
        `;
      userContainer.appendChild(userDiv);
    });
  }

  searchUsers() {
    const searchInput = document
      .getElementById("search-input")
      .value.toLowerCase();
    const filteredUsers = this.users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchInput) ||
        user.username.toLowerCase().includes(searchInput) ||
        user.email.toLowerCase().includes(searchInput) ||
        user.phone.toLowerCase().includes(searchInput) ||
        user.address.street.toLowerCase().includes(searchInput) ||
        user.address.city.toLowerCase().includes(searchInput) ||
        user.address.zipcode.includes(searchInput) ||
        user.company.name.toLowerCase().includes(searchInput) ||
        user.company.catchPhrase.toLowerCase().includes(searchInput)
    );

    this.displayUsers(filteredUsers);
  }
}
