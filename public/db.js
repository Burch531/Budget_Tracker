// create variable to hold db connection
let db;
// establish a connection to IndexedDB database 
const request = indexedDB.open('budget_tracker', 1);

// this event will emit if the database version changes
request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore('new_transaction', { autoIncrement: true });
};



// listen for app coming back online
window.addEventListener('online', uploadTransaction);