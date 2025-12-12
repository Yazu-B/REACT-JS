function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "Yazu", age: 20 },
        { name: "Priya", age: 22 },
        { name: "Rohan", age: 25 }
      ]);
    }, 1000);
  });
}

async function getUsers() {
  const users = await fetchUsers();
  console.log("Users:", users);
}

getUsers();