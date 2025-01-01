# React Native Asynchronous State Access

This repository demonstrates a common error in React Native: attempting to access state before it has been properly assigned, especially within asynchronous operations. The `bug.js` file shows the problematic code, while `bugSolution.js` provides a corrected version.

## Problem:

Accessing a state variable or prop before it's assigned a value leads to runtime errors. This often happens when dealing with asynchronous tasks such as API calls or `setTimeout`. The example showcases how trying to render data before it's fetched from an API results in an error.

## Solution:

The solution involves using conditional rendering or the optional chaining operator to prevent accessing the state until it's properly populated. This avoids runtime errors and provides a better user experience.