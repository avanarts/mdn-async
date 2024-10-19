const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
)

console.log(fetchPromise);

fetchPromise.then((res) => {
    console.log(`Response received: ${res.status}`);
})

console.log("Started request...")