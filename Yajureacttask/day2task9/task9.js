function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; 
      if (success) {
        resolve([
          { name: "Arjun", age: 20 },
          { name: "Priya", age: 22 },
          { name: "Rohan", age: 25 }
        ]);
      } else {
        reject("Failed to fetch users. Please try again.");
      }
    }, 1000);
  });
}

async function getUsers() {
  try {
    const users = await fetchUsers();
    console.log("Users:", users);
  } catch (error) {
    console.log("Error:", error);
  }
}

getUsers();