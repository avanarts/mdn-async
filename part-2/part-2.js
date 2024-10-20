const URL = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

const fetchPromise = fetch(URL)

console.log(fetchPromise);

fetchPromise
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`)
        } return res.json();
    })
    .then((data) => { // promise chaining
        console.log(data[2].name)
    });

console.log("Started request...")


//error handling example
const badFetch = fetch(
    "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  
  badFetch
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data[0].name);
    })
    .catch((error) => {
      console.error(`Could not get products: ${error}`);
    });

    /*
        Promises can be one of three states:
            1. Pending (promise created and has not succeeded or failed yet)
            2. Fulfilled (async function has succeeded, and then() handler is called)
            3. Rejected (async function has failed, and catch() handler is called)

    */


//promise.all method
const fetchPromise1 = fetch(URL);
const fetchPromise2 = fetch(
"https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
"https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
.then((res) => {
    for (const response of res) {
    console.log(`${response.url}: ${response.status}`);
    }
})
.catch((error) => {
    console.error(`Failed to fetch: ${error}`);
});

async function fetchProducts() {
    try {
        const res = await fetch(URL)
        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
        }

        const data = await res.json();
        console.log(data[1].name)
        return data
    } catch (err) {
        console.error(`Could not get products: ${err}`)
    }
}

const returnedData = async () => {
    const data = await fetchProducts()
    console.log(data)
}

returnedData();