// PROMISES

const notesReceived = true;
const receivedTime = 10;

new Promise((resolve, reject) => {
    if (notesReceived === true && receivedTime === 10) {
        const fulfilledMessage = { message: "thank you very much asma i received notes!" }
        resolve(fulfilledMessage)
    }
    else if (notesReceived === true && receivedTime > 10) {
        const rejectMessage = { message: "thank you very much asma but very late!" }
        reject(rejectMessage)
    }
    else {
        const rejectMessage = { message: "asma i did not receive notes!" }
        reject(rejectMessage)
    }
})
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(res);
})