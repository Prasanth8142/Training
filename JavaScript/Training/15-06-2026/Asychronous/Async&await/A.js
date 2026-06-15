function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000);
    });
}

async function getData() {
    const result = await fetchData();
    console.log(result);
}

getData();