# Code Challenges

Part of growing as a programmer is to practice, practice, practice. Throughout this course, you will complete a set of daily code challenges. Each set will contain up to ten problems.

The daily challenges will be posted by the instructor at the end of lecture every day. Plan to focus on this task with your partner every day after class until 6 p.m., completing as much as possible during this time, then complete the remainder of the challenges on your own, as needed.

## Challenge Execution and Testing

At the end of lecture each day, a new challenge will be published in Canvas. Copy the contents of the file into **this folder** in the `data-structures-and-algorithms` repository and work on the individual problems for the day. It's a good practice to add and commit regularly as you finish each problem in the day's challenge. When you are finished, push your branch to GitHub to create a PR.

Every code challenge file is divided into two sections: challenges and tests. You will need to add your own solutions to each challenge but should not modify the tests in any way. These tests will ensure that your solution is meeting the requirements of each challenge. Even though you may not modify the tests, you are encouraged to read them to see what is being evaluated.

- Run your test from the root of the `data-structures-and-algorithms` repository, as follows
  - Run All Tests: `npm test`
  - Run a specific test: `npm test challenges-01`

### Continuous Testing

The repository contains a folder named `.github` which contains a configuration file that will automatically execute all of your tests when you check in your code to GitHub.

You can see the results of your tests online in the "Actions" tab of your repository on GitHub

> NOTE: This will be the source of your grades as well.

## Assignment Submission

When you finish the assignment each day, make a new pull request from your daily challenge branch to your master branch and submit the PR URL in Canvas. You can submit a link to a pull request even if the pull request is closed.


# Challenge Title: 01
<!-- Description of the challenge -->
Write a function called reverseArray which takes an array as an argument. Without utilizing any of the built-in methods available to your language, return an array with elements in reversed order.
## Whiteboard Process
<!-- Embedded whiteboard image -->
(![Whiteboard](IMG_1013.jpg))

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Did it on the original array. 
## Solution
<!-- Show how to run your code, and examples of it in action -->
...



# Challenge Title: 02
<!-- Description of the challenge -->
Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.## Whiteboard Process
<!-- Embedded whiteboard image -->
![Whiteboard](images/IMG_1021.jpg)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
0(n) and I approached it without using any built-in methods
## Solution
<!-- Show how to run your code, and examples of it in action -->
...



# Challenge Title: 03
<!-- Description of the challenge -->
Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.
## Whiteboard Process
<!-- Embedded whiteboard image -->
![WhiteBoard](<images/Screenshot 2023-09-20 at 11.59.08 PM.png>)

## Approach & Efficiency
<!-- What approach did you take? Why? What is the Big O space/time for this approach? -->
Did it by just always getting midpoint and checking left or right if key is bigger or less than.
## Solution
<!-- Show how to run your code, and examples of it in action -->
...




