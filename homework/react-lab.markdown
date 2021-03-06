---
layout: homework
title: CSCI-UA.0480 -  React Lab
---

<div class="panel panel-default">
  <div class="panel-heading">React Lab</div>
  <div class="panel-body" markdown="block">

# React Lab - MemorEmoji 

## Submission Process

* work in groups of 2 - 4 students
* choose one of the applications described below in the Overview &rarr; Description and implement it
* __submit using [this form](https://docs.google.com/forms/d/e/1FAIpQLSfPZMXdlMnx-w-ZighnPR5P7bw6opA0h_1QvFiw8M7SNSaKUw/viewform)__
* __each person on the team should submit their own individual form__
* once you've submitted:
    * raise your hand to let me know
    * either...
        1. help others with their lab
        2. try the other application!

## Scoring

Total Score


* __60 points__ submitting _any_ code
* __80 points__ (Part 1) code deployed on [codepen.io](https://codepen.io), [glitch](glitch.com), and single card toggle works
* __95 points__ (Part 2) code deployed and multi-card toggle works with hardcoded components / elements
* __100 points__ (Part 3) full game implemented

Extra Credit 

* __+15 points__ (Part 4, extra credit) matching game implemented 
* __+20 points__ (Part 5, extra credit) game over message implemented

## Overview

### Goals / Topics Covered

You'll be using the following concepts:

* React
    * props
    * state
    * events
    * nested components
    * conditional rendering
    * form elements (extra credits)


### Description

Create a game similar to  __MemorEmoji__ from  Homework 6, but using __React__ instead of plain JavaScript.

## Instructions

### Setup

You can develop your application with any tools that you like. If you'd like to use what we learned in the lectures, you can choose one of these method (however, you can only deploy on 2 and 3):

1. use `create-react-app`
    * allows quick setup for local development
    * you can use your own text editor!
    * [see the instructions on setting up create-react-app in the slides](../slides/26/react-state-parent.html#/15)
    * [but also, __if you are having path issues, especially on windows__, see this github ticket](https://github.com/facebookincubator/create-react-app/issues/138#issuecomment-334316575)
2. remix a react starter boilerplate using [glitch.com](https://glitch.com/edit/#!/remix/starter-react)
    * add your code to `app.jsx`
3. create a new project (pen) in [codepen.io](https://codepen.io)
    * debugging might be difficult
    * ...but your application will already be deployed!
    * to setup, configure babel as your JavaScript pre-processor and add React and ReactDOM Libraries:
        <br>
        ![codepen](../resources/img/codepen.gif)

### Part 1 - Single Card

Create a React component or components so that you can toggle a card from being face down or face up. Note that rather than using css, you can manipulate the DOM directly in your jsx (for example, favor conditionally adding a text node to your JSX rather than setting visibility hidden). 

Lastly, to add a class to a React element, use `className=foo`, where `foo` is is your class name.

<video controls>
    <source src="../resources/video/lab08-1.webm" type="video/webm">
    Sorry, your browser doesn't support embedded videos.
</video>

### Part 2 - Multiple Cards

Instead of just a single component that reacts to clicks, create several that can be clicked. Try to use parent and child components to do this. Clicking on any card toggles it from being face down to face up...or from face up to face down. 

<video controls>
    <source src="../resources/video/lab08-2.webm" type="video/webm">
    Sorry, your browser doesn't support embedded videos.
</video>

### Part 3 - Game

Now... only allow the player to flip two cards at a time. Once they flipped two cards, display a message and a confirmation button to proceed to the next turn. If the two cards flipped are the same, keep them face up. Otherwise, turn the cards back over so that the value is hidden.

<video controls>
    <source src="../resources/video/lab08-3.webm" type="video/webm">
    Sorry, your browser doesn't support embedded videos.
</video>

### Part 4 - Game Over

When the game ends (all of the cards are face up and matched), replace the cards with a message that says: "Game Over"

<video controls>
    <source src="../resources/video/lab08-4.webm" type="video/webm">
    Sorry, your browser doesn't support embedded videos.
</video>


### Deployment

To deploy your app on glitch.com... (only valid if you developed locally, otherwise, your code is already there!)

1. use the react starter boilerplate on [glitch.com](https://glitch.com/edit/#!/remix/starter-react)
2. add your code to `app.jsx`
	* __Do not bring in `import` statements__
    * (it's already done at the top of `index.js` with `require`)
    * only add your components and your call to `ReactDOM.render`
3. add styles easily by adding a `style` tag in `index.html` and writing your css directly there

To deploy your app in codepen.io... (only valid if you developed locally, otherwise, your code is _already there_)

1. configure babel, React and React DOM as shown in the gif above (see Instructions &rarr; setup)
2. copy all of your __components__ over to the js panel (don't include any of the import statements)
3. you may have to change `extends` so that it's `extends React.Component` for each component
4. use ```ReactDom.render``` at the very end to render your main/root component:
    ```ReactDOM.render(<App />, document.body);```

