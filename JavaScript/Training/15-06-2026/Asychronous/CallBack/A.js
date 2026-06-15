function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 2000);
}

function processData() {
    console.log("Processing data...");
}

fetchData(processData);




setTimeout(() => {
    console.log("Step 1");

    setTimeout(() => {
        console.log("Step 2");

        setTimeout(() => {
            console.log("Step 3");
        }, 1000);

    }, 1000);

}, 1000);