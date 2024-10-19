//synchronous
function greetUser(name) {
    return `Welcome, ${name}!`
}

const userName = 'Jacob';
console.log(greetUser(userName))

//long-running synchronous
function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false // if n divided by 2 (or any number higher, up to square root) then not prime
        }
    } return n > 1;
}
const rand = (max) => Math.floor(Math.random() * max);
function generatePrimes(quota) {
    const primes = [];
    while (primes.length < quota) {
        const candidate = rand(1000000);
        if (isPrime(candidate)) {
            primes.push(candidate)
        }
    } 
    console.log("Primes generated.")
    return primes;
}

generatePrimes(1000000);

console.log("Long running process complete.")


//early asynchronous API XMLHttpRequest
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});