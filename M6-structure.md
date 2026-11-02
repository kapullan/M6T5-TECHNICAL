# File Structure Report

## Before
* index.html: Had basic code and a link to the script.
* settings.js: Had unsafe code that ran all at once and caused crashes.

## After
* index.html: Kept the script link at the top so screen colors load smoothly.
* settings.js: Reorganized into safe steps that only run inside protective boxes.

## Why Changes Were Made

### 1. Checking for old data first
* Reason: Stops the website from wiping out choices every time it's refresh.

### 2. Using try/catch safety nets
* Reason: Stops the whole website from freezing if a browser blocks storage.

### 3. Checking if data is missing
* Reason: Stops the page from breaking when a user loads the site.

### 4. Waiting for the button to load
* Reason: Makes sure the button actually exists on the screen before the code tries to look for clicks.