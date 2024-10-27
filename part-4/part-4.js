//Workers

/*
main code and worker code do not get direct access to the other's variables, and interact by sending messages


3 kinds of workers
- dedicated workers
- shared workers
- service workers

*/

// Creates a new worker, giving it the code in "generate.js"
const worker = new Worker("./generate.js");

//When user clicks 'generate primes', this sends a message to the worker with the command 'generate'
document.querySelector("#generate").addEventListener("click", () => {
  const quota = document.querySelector("#quota").value;
  worker.postMessage({
    command: "generate",
    quota,
  });
});


//the worker sends a message back to the main thread, and the message box is updated with the data from the message
worker.addEventListener("message", (message) => {
  document.querySelector("#output").textContent =
    `Finished generating ${message.data} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.querySelector("#user-input").value =
    'Try typing in here immediately after pressing "Generate primes"';
  document.location.reload();
});

//this was a dedicated worker, meaning it's used by a single script instance



//shared workers: can be shared by several different scripts in different windows
//service workers: act like proxy servers, caching resources