function fetchSettings() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        theme: "light",
        language: "English"
      });
    }, 2000);
  });
}

fetchSettings().then(settings => {
  console.log("App Settings:");
  console.log("Theme:", settings.theme);
  console.log("Language:", settings.language);
});