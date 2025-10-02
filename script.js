const userContainer = document.getElementById('userContainer');
const reloadBtn = document.getElementById('reloadBtn');

// Function to fetch and display user data
async function fetchUsers() {
  userContainer.innerHTML = "<p>Loading users...</p>";
  
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(HTTP error! Status: ${response.status});
    }

    const users = await response.json();

    userContainer.innerHTML = ""; // clear loading text

    users.forEach(user => {
      const card = document.createElement("div");
      card.classList.add("user-card");

      card.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
      `;
      
      userContainer.appendChild(card);
    });

  } catch (error) {
    userContainer.innerHTML = <p class="error">Failed to load data: ${error.message}</p>;
  }
}

// Fetch users on page load
fetchUsers();

// Reload button to refetch data
reloadBtn.addEventListener("click", fetchUsers);