// the global fetch()  method start the process of fetching a resource from the network , returning a promise which is fullfilled once the reponse is available

// A fetch() promise only rejects when a network error is encountered
// (which is usually when there's a permissions issue or similar). A fetch()
// promise does not reject on HTTP errors ( 404 , etc.). Instead, a then()
// handler must check the and/or properties.
/*
Topic 1: The Fetch API & Its Evolution
1. Concept in Simple Words:
fetch is a modern way to ask a server for data (like user profiles or weather updates) over a network
. Before fetch, developers used XMLHttpRequest (XHR), which was much more complex to write and manage
.
2. Importance in Real Projects:
Every modern web or mobile app needs to communicate with a database or an external API. fetch is the standard tool for this "networking"
.
3. Small Practical Example:
fetch('https://api.github.com/users/hiteshchoudhary')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log("Error:", error));

4. Common Interview Questions:
What is the difference between fetch and XMLHttpRequest?
When was fetch introduced to Node.js? (Answer: Around 2022 in Node 18)
.
5. Common Mistakes:
Thinking fetch is part of the JavaScript language itself. It is actually a Web API (in browsers) or a Node API (in Node.js)
.
6. Tricky Points:
Interviewers ask if fetch is available in all environments. It wasn't natively in Node.js for a long time because Node didn't have the "Browser Web Stream API"
.
7. Memory Trick:
F.E.T.C.H. = Fast Easy Technique for Connecting Hosts.
8. Comparison:
XHR: Uses complex callbacks and event listeners
.
Fetch: Uses Promises, making it cleaner and easier to read
.
9. Interview/Revision Notes:
fetch is a global method that returns a Promise
. It replaced the bulky XMLHttpRequest and the old request module in Node.js
.
Topic 2: Internal Working of Fetch (The Two-Part Process)
1. Concept in Simple Words:
When you call fetch, it doesn't just do one thing; it splits into two parallel tracks:
Track A (Memory): It sets aside space in your computer's memory for the data
.
Track B (Network): It goes out to the internet to get that data
.
2. Importance in Real Projects:
Understanding this helps you debug why a variable might be empty if the network request is still pending.
3. Small Practical Example (Conceptual Logic):
const response = fetch('url'); 
// 1. Memory is reserved for 'response'.
// 2. Browser/Node API handles the network request in background.
4. Common Interview Questions:
How does fetch handle memory internally?
What are onFulfilled and onRejection arrays?
5. Common Mistakes:
Beginners think fetch happens instantly. It is asynchronous; the code "waits" for the network track to finish
.
6. Tricky Points:
The 404/500 Error Trap: If a server returns a "404 Not Found," does fetch go to .catch()?
No. A 404 is still a response from the server. It goes to the onFulfilled (resolve) track. It only rejects if the request cannot be made at all (e.g., no internet)
.
7. Memory Trick:
Think of fetch like ordering pizza.
Memory Track: The shop gives you a receipt (reserved space).
Network Track: The delivery guy goes to the store (Network request).
8. Comparison:
Global Variables: Available to you.
Internal Fetch Data: Private memory space you cannot access until the promise resolves
.
9. Interview/Revision Notes:
fetch starts two processes: a memory reservation and a network request
. It populates internal arrays (onFulfilled and onRejection) which then update the final response variable
.
Topic 3: Execution Priority (The Microtask Queue)
1. Concept in Simple Words:
JavaScript has a "To-Do" list for tasks. Some tasks are "Normal" (like setTimeout), but fetch tasks are "VIP". The VIP list is called the Microtask Queue
.
2. Importance in Real Projects:
It explains why fetch results often appear before setTimeout results, even if the timer was 0ms.
3. Small Practical Example:
setTimeout(() => console.log("Timeout"), 0); // Normal Queue
fetch('url').then(() => console.log("Fetch")); // VIP Queue (Microtask)
// "Fetch" will likely print first if the network is fast.
4. Common Interview Questions:
What is the Microtask Queue?
Which has higher priority: setTimeout or fetch? (Answer: fetch/Promises)
.
5. Common Mistakes:
Assuming that since setTimeout was written first, it will execute first.
6. Tricky Points:
Interviewers will provide a code snippet with setTimeout, a regular console.log, and a fetch. You must know the order: Synchronous code first -> Microtasks (Fetch) -> Tasks (setTimeout)
.
7. Memory Trick:
Microtask = "VIP" Task. Always gets to the front of the line.
8. Comparison:
Task Queue (Callback Queue): For setTimeout, setInterval
.
Microtask Queue (Priority Queue): For Promises and fetch
.
9. Interview/Revision Notes:
The Event Loop checks the Microtask Queue first. If it's not empty, it won't even look at the Task Queue
.
Questions for Preparation
Beginner Questions
What does the fetch() method return? (A Promise)
.
Is fetch a part of the core JavaScript engine? (No, it's a Web/Node API)
.
What happens if a fetch request receives a 404 error? (It resolves successfully)
.
How do you handle errors in a fetch call? (Using .catch() or try-catch)
.
Why is fetch preferred over older methods? (Clean syntax, Promise-based)
.
Intermediate Questions
Explain the two parallel tracks fetch uses internally
.
What are the onFulfilled and onRejection arrays?
.
Why was fetch added to Node.js so late? (Due to dependencies on browser-specific stream APIs)
.
What is the role of the Microtask Queue in the execution of fetch?
.
How can you send a POST request using fetch? (By passing an options object with method: 'POST')
.
Advanced Questions
Describe the "VIP Line" analogy for the Microtask Queue vs. the Task Queue
.
How does the JavaScript engine's Call Stack interact with the Microtask Queue?
.
If fetch and setTimeout both finish at the exact same time, which one executes first and why?
.
Explain how internal data variables in a fetch call are kept private
.
How did the introduction of fetch in Node.js change the "paradigm" of web requests?
.
Common Coding Interview Question
Question: What is the output of the following code?
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
Answer & Explanation:
console.log("Start"): Executes immediately (Sync).
setTimeout: Registered in Task Queue.
Promise.resolve(): Registered in Microtask Queue (VIP).
console.log("End"): Executes immediately (Sync).
Event Loop checks Microtask Queue: Promise prints.
Event Loop checks Task Queue: Timeout prints. Output: Start, End, Promise, Timeout
.


Origin
Introduced to Node.js in 2022; previously a Browser-only API
.
Internal Workings
1. Reserves memory space. 2. Fires Network Request
.
Priority
Uses Microtask Queue (High Priority)
.
Error Behavior
Resolves on 404/500 errors. Rejects only on network failure
.
Old Methods
XMLHttpRequest (XHR) and request module

Important Syntax & Patterns:
Basic Fetch: fetch(url).then(res => res.json()).then(data => ...)
.
With Options: fetch(url, { method: 'POST', body: JSON.stringify(data) })
.
Real-World Use Cases:
Fetching user data from a GitHub API
.
Sending form data to a backend server
.
Updating a web page without refreshing (AJAX behavior)
.

*/
