function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log("Points: " + demeritPoints);
        }
    }
}

// Example usage
checkSpeed(33);  // Output: Points: 2
checkSpeed(72); // Output: License suspended
