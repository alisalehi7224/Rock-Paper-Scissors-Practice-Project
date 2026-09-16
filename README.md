# 🪨📄✂️ Rock Paper Scissors

A simple **Rock Paper Scissors** game built with **HTML, CSS, and JavaScript**.

The player competes against the computer, with the game ending when either the player or the computer reaches **5 points**.

## Features

* Choose between Rock, Paper, or Scissors
* Computer makes a random choice each round
* Displays the player's choice and the computer's choice
* Tracks:

  * Player score
  * Computer score
  * Number of draws
* First player to reach **5 points** wins the game
* Displays the result of each round
* Maintains a match history showing wins, losses, and ties
* Disables the Rock, Paper, and Scissors buttons when the game ends
* Reset button to start a new game
* Visual feedback for wins and losses
* Simple interactive UI with hover and active button effects

## Technologies Used

* **HTML5** — Page structure and game controls
* **CSS3** — Styling, layout, and visual effects
* **JavaScript (ES6+)** — Game logic, random computer choices, score tracking, DOM manipulation, and event handling

## How the Game Works

1. Choose **Rock**, **Paper**, or **Scissors**.
2. The computer randomly selects one of the three choices.
3. The winner of the round is determined according to the standard rules:

   * Rock beats Scissors
   * Scissors beats Paper
   * Paper beats Rock
4. The corresponding score is updated.
5. The result of the round is added to the match history.
6. The game continues until either the player or computer reaches **5 points**.
7. The choice buttons are disabled when the game ends.
8. Press **Reset** to start a new game.

## Project Structure

```text
Rock-Paper-Scissors/
├── Rock Paper Scissors.html
├── index.js
├── style.css
└── README.md
```

## How to Run

1. Clone this repository.
2. Open the project folder.
3. Open `Rock Paper Scissors.html` in a web browser.
4. Choose Rock, Paper, or Scissors to start playing.

## What I Practiced

This project helped me practice:

* DOM manipulation
* Event handling
* Functions
* Conditional statements
* `switch` statements
* Ternary operators
* Arrays
* Random number generation with `Math.random()`
* Updating HTML elements with JavaScript
* Creating HTML elements dynamically
* CSS classes and dynamic styling
* Tracking and updating game state
* Disabling HTML buttons with JavaScript
* Basic game logic

## Future Improvements

Possible improvements include:

* Make the layout more responsive for different screen sizes
* Add animations for each round
* Add sound effects
* Store match history in an array of objects
* Add a dedicated "Game Over" screen
* Improve the reset functionality without reloading the entire page
* Add a first-to-5 match indicator
* Improve the overall UI and accessibility
