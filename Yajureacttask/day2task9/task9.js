function fetchUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5; 
      if (success) {
        resolve([
          { name: "Lewis", age: 20 },
          { name: "Max", age: 22 },
          { name: "Marc", age: 25 }
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
