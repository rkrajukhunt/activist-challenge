# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

The code is a Node.js module that exports two functions: createHash and deterministicPartitionKey.

1. `createHash` is a simple utility function that takes some data as input and returns a hexadecimal string representation of a SHA3-512 hash of the data.
2. `deterministicPartitionKey` is a function that takes an event object as input and returns a deterministic partition key. If the event object is undefined, the function returns the string "0". If the event object is defined and it has a partitionKey property, the function checks the length of the partitionKey. If the length is less than or equal to 256, the partitionKey is returned as the deterministic partition key. If the length is greater than 256, a SHA3-512 hash of the stringified event object is returned as the deterministic partition key.

The code is more clean and readable then before:

1. optimized and make createHash reusable
2. if-else conditions was not simply understandable, now the conditions looks straight forward and easy to understand.
3. In this optimization, the code leverages optional chaining (?.) and the ternary operator (? :) to simplify the logic for determining the partition key.
   It also eliminates the check for the type of candidate as a string, since the optional chaining operator will return undefined if the partitionKey property does not exist or is falsy, which can be handled by the ternary operator.

Test Case
In this example, the deterministicPartitionKeyDemo function is tested for three different cases:

1. when the partitionKey length is less than or equal to 256,
2. when the partitionKey length is greater than 256, and
3. when the event is undefined.
   For each case, the function is run and the result is asserted using expect and the corresponding matcher (e.g. toBe or toMatch).
