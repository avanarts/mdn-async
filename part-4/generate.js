
//listens for message from main thread and if message command is 'generate', call generatePrimes()
addEventListener("message", (message) => {
    if (message.data.command === "generate") {
      generatePrimes(message.data.quota);
    }
  });
  
  // Generate primes inefficiently
  function generatePrimes(quota) {
    function isPrime(n) {
      for (let c = 2; c <= Math.sqrt(n); ++c) {
        if (n % c === 0) {
          return false;
        }
      }
      return true;
    }
  
    const primes = [];
    const maximum = 1000000;
  
    while (primes.length < quota) {
      const candidate = Math.floor(Math.random() * (maximum + 1));
      if (isPrime(candidate)) {
        primes.push(candidate);
      }
    }


    postMessage(primes.length); //when finished, sends message to the main thread with number of primes generated
  }
  