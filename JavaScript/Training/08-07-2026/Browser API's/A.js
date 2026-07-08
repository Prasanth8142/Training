// Variables to store timer IDs
    let timeoutId;
    let intervalId;
    let count = 0;

    // setTimeout - Executes once after 3 seconds
    function startTimeout() {
        timeoutId = setTimeout(() => {
            document.getElementById("output").innerHTML =
                "setTimeout executed after 3 seconds";
        }, 3000);
    }

    // clearTimeout - Cancels setTimeout
    function cancelTimeout() {
        clearTimeout(timeoutId);
        document.getElementById("output").innerHTML =
            "setTimeout cancelled";
    }

    // setInterval - Executes repeatedly every 1 second
    function startInterval() {
        intervalId = setInterval(() => {
            count++;
            document.getElementById("output").innerHTML =
                "Counter: " + count;
        }, 1000);
    }

    // clearInterval - Stops setInterval
    function stopInterval() {
        clearInterval(intervalId);
        document.getElementById("output").innerHTML =
            "Interval stopped";
    }