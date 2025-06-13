function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function run() {
    console.log("hello");

    await delay(2000); // wait for 2 seconds
    console.log("Hello after 2 seconds");

    console.log("end");
}

run();
