# VideoView

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.13.

Node: 10.15.1

## Explanation

The goal of this exercise is to build a little application composed of an input form and a video view (player or empty square if there is nothing to display) below. 

- The input form takes a YouTube video URL (not embed url) as entry and displays the YouTube video inside the video view. 
- Additionally, each request should create an entry in a local history list shown on the left side of 
    the page. If an item of the history is clicked, the related video should be shown again. 
- A bookmark button will be added. When clicking on it, the URL of the playing video will be added to bookmarks. Another button will give access to the list of all the bookmarks. The position of this button is up to the candidate.
- The list of bookmarks and history will be stored into the JavaScript native localStorage. When the page is loaded, an indicator (label or other) should show the number of bookmarks in the localStorage.
