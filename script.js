function trackFitness(exercise, duration) {
  return new Promise((resolve, reject) => {
    if (duration > 0) {
      console.log(`Performed ${exercise} for ${duration} minutes.`);
      setTimeout(() => {
        resolve(duration);
      }, 5000); // Simulating the process with a delay of 5 seconds
    } else {
      reject("Invalid duration. Please provide a positive number.");
    }
  });
}

trackFitness("Running", 30)
  .then((duration) => {
    console.log(`Total duration: ${duration} minutes.`);
  })
  .catch((error) => {
    console.log(`Failed to track fitness: ${error}`);
  });
