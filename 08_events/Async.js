/*

1. The Core Nature of JavaScript
Synchronous and Single-Threaded: By default, JavaScript executes code line-by-line in a single thread. 
Each operation must wait for the previous one to complete before the next begins.
Why it feels fast: While the JavaScript engine itself is single-threaded, it never exists in isolation; it always runs within a Runtime Environment (like a Browser or Node.js) that handles multi-tasking by delegating work.
2. Blocking vs. Non-Blocking Code
Interviewers often ask when to use which. The source clarifies that neither is "better"—it depends on the use case:
Blocking Code: Halts the program flow until an operation (like reading a file) is finished.
Interview Insight: Use blocking code when a subsequent step depends entirely on the previous result, such as waiting for a database to confirm a user is registered before sending a "Success" message.
Non-Blocking Code: Allows the program to continue executing other tasks while waiting for a background process to finish.
3. The JavaScript Runtime Architecture
Understanding the components of the runtime is essential for explaining how "asynchronous" behavior actually happens:
JS Engine: Consists of the Memory Heap (memory allocation) and theCall Stack (where code is executed).
Web APIs / Node APIs: These provide extra functionality that the JS engine doesn't have natively, such as setTimeout, DOM manipulation, or File System access.
Task Queue (Callback Queue): When an asynchronous API call (like a timer or a click event) finishes, its callback is sent to this queue to wait for its turn to execute.
High Priority / Promise Queue (Microtask Queue): Modern APIs like fetch use a separate queue for Promises. This queue has higher priority than the standard Task Queue, meaning its tasks are pushed to the Call Stack sooner.
4. Common "Trick" Interview Questions
The source highlights a classic scenario you are likely to encounter:
The setTimeout(..., 0) Question: If you have a console.log("1"), a setTimeout with 0 delay, and then a console.log("2"), what is the order?
The Answer: The order will be "1", then "2", and then the setTimeout callback.
The Reason: Even with a 0-millisecond delay, the setTimeout is a Web API call. It must be sent to the API environment, registered, moved to the Task Queue, and then wait for the Call Stack to be completely empty before it can execute.
5. Environment Differences
Be prepared to explain that certain features are environment-specific:
Browsers provide the DOM (Document Object Model), which is not available in Node.js.
Node.js provides direct File System access, which browsers generally do not have for security reasons.*/
