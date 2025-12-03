const apiLinkFirebase = "https://template-api-link-default-rtdb.europe-west1.firebasedatabase.app/.json";

function getApiData(link) {
  return new Promise((resolve, reject) => {
    fetch(link)
      .then(data => resolve(data.json()))
      .catch(err => reject(err));
  });
}

getApiData(apiLink)
  .then(data => {
    console.log("Отримані дані:", data);
  })
  .catch(error => {
    console.error("Помилка:", error);
  });
