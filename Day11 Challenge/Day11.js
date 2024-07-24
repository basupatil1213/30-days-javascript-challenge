import {construct_log} from '../index.js';
// Day 11: Promises and Async/Await

export const day11_learning = () => {
    
    // Tasks/Activities:

    // Activity 1: Understanding Promises

    // Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.

    construct_log("Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.");
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise resolved after 2 seconds");
        }, 2000);
    });

    promise.then(message => {
        console.log(message);
    });

    // Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using - catch () .

    construct_log("Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using - catch () .");

    const reject_promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Promise rejected after 2 seconds")
        },2000);
    });

    reject_promise.catch((e) => {
        console.log(e);
    })

    // Activity 2: Chaining Promises

    // Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

    construct_log("Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.");

    const fetchData = (data, delay) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(`Fetched data: ${data}`);
            }, delay);
        });
    };

    fetchData("Data 1", 1000)
        .then((message) => {
            console.log(message);
            return fetchData("Data 2", 2000);
        })
        .then((message) => {
            console.log(message);
            return fetchData("Data 3", 1000);
        })
        .then((message) => {
            console.log(message);
            console.log("All data fetched in sequence");
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });

    // Activity 3: Using Async/Await

    // Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.

    construct_log("Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.");
     
    async function waitForPromise(promise) {
        try {
            const resolvedValue = await promise;
            console.log(resolvedValue);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    // Example usage:
    const examplePromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Promise resolved after 1 second");
        }, 1000);
    });

    waitForPromise(examplePromise);

    // Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

    construct_log("Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.");

    async function handleRejectedPromise(promise) {
        try {
            const resolvedValue = await promise;
            console.log(resolvedValue);
        } catch (error) {
            console.error("Error:", error.message);
        }
    }

    // Example usage:
    const rejectedPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Promise rejected after 1 second"));
        }, 1000);
    });

    handleRejectedPromise(rejectedPromise);

    // Activity 4: Fetching Data from an API

    // Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.

    construct_log("Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.");

    function fetchDataWithPromises() {
        fetch('https://api.publicapis.org/entries')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // Example usage:
    fetchDataWithPromises();

    // Task 7: Use the fetch APl to get data from a public API and log the response data to the console using async/await.

    construct_log("Task 7: Use the fetch APl to get data from a public API and log the response data to the console using async/await.");

    async function fetchDataWithAsyncAwait() {
        try {
            const response = await fetch('https://api.publicapis.org/entries');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    // Example usage:
    fetchDataWithAsyncAwait();

    // Activity 5: Concurrent Promises

    // Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.

    construct_log("Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.");

    function handleMultiplePromises() {
        const promise1 = fetch('https://api.publicapis.org/entries').then(response => response.json());
        const promise2 = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Promise 2 resolved'), 2000);
        });
        const promise3 = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Promise 3 resolved'), 3000);
        });

        Promise.all([promise1, promise2, promise3])
            .then(values => {
                console.log('All promises resolved:');
                values.forEach((value, index) => {
                    console.log(`Promise ${index + 1}:`, value);
                });
            })
            .catch(error => {
                console.error('Error in one of the promises:', error);
            });
    }

    // Example usage:
    handleMultiplePromises();

    // Task 9: Use Promise. race to log the value of the first promise that resolves among multiple promises.

    construct_log("Task 9: Use Promise. race to log the value of the first promise that resolves among multiple promises.");

    function handlePromiseRace() {
        const promise1 = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Promise 1 resolved'), 1000);
        });
        const promise2 = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Promise 2 resolved'), 2000);
        });
        const promise3 = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Promise 3 resolved'), 3000);
        });

        Promise.race([promise1, promise2, promise3])
            .then(value => {
                console.log('First promise resolved:', value);
            })
            .catch(error => {
                console.error('Error in one of the promises:', error);
            });
    }

    // Example usage:
    handlePromiseRace();
}
