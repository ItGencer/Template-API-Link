const apiLinkFirebase = "https://template-api-link-default-rtdb.europe-west1.firebasedatabase.app/.json";

class ApiClass {
  #apiLink;
  
  constructor(apiLink){
    this.#apiLink = apiLink;
  }

  get getApiData(){
    this.getDataFunct(this.#apiLink);
  }
  
  set setApiData(data){
    this.setDataFunct(this.#apiLink, data);
  }

  getDataFunct(link){
    const apiDataPromise = fetch(link);
    return apiDataPromise
      .then(data =>{
        if (!data.ok) {
          throw new Error("Data is not ok");
        }
        return data.json();
      })
      .then(data => {
        try {
          data.forEach(element => {
            console.log(element);
          });
        }
        catch (error) {
          console.error(`Data is not - ${error}`);
        }
      })
      .catch(error => console.error(error));
  }

  setDataFunct(link, data){
    fetch(link, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify([data])
    })
    .then(result => result .json());
  }
}