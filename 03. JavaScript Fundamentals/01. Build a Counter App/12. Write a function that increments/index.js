let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function lap() {
    lapsCompleted += 1;
}

for (i = 0; i < 3; i++) {
    lap();
}

console.log(lapsCompleted)