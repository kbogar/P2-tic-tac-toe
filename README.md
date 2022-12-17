# Tic Tac Toe
Tic Tac Toe is a website, a game in which two players take turns in drawing either an X or an O in one square of a grid consisting of nine squares. The winner is the first player to get three of the same symbols in a row.

You can see the live link [here](https://kbogar.github.io/P2-tic-tac-toe/)

![](/docs/FireShot%20Capture%20020.png)
# Target Audience
This game is an addictive board game, designed to attract people who find board games interesting and fun. This makes the target demographic pretty broad.
# Design
## Color Scheme
This was obtained from [MyColor](https://mycolor.space/) website. 

![](/docs/FireShot%20Capture%20021%20-%20mycolor.space.png)
## Typography
Google Fonts were used as below:
- Permanent Marker is used for the whole gamesite, because I liked the look of a handwriting style.
- Cursive is used as a fallback font if the browser not support the first one.
# Features
Website consists of home page, what is actually a game page also, and a 404 error page.

## Home Page

### Header
- This is a title of the home page. It is not clickable since there is just one game page.

![](/docs/header.png)
### Game Section
- It contains a 3x3 grid where the players take turns by clicking on it marking X or O in one of the nine spaces.
- There is a game status message, informing the current players turn, the winner and if the game endend in a draw.
- A button for restarting a new game.
- A score tracking system, containing the two players win times.

![](/docs/gamesection.png)

### Footer
- Containing the follow me social media links.

![](/docs/footer.png)

### 404 Error page
- This page is made with the same style as the home page. It contains a message apologising to the user that the requested page is not found. It then directs the user to a link back to a home page.

![](/docs/errorpage.png)

### Future Features
- I would like to integrate an AI player to the game, so the user can choose with who he would like to play.
- The ability for user to choose the grid sizes, 3x3 or 5x5.
- To make the game multiplayer with a server and multiple clients.
## Accessibility
- I confirmed that the colors and fonts chosen are easy to read and accessible by running it through Lighthouse in devtools.

![](/docs/lighthouse.PNG)
# Technologies Used
## Languages Used
- HTML
- CSS
- JavaScript
## Frameworks, Libraries & Programs Used
- Devtools - for testing and troubleshooting.
- [Favicon.cc](https://www.favicon.cc/) - to create favicon icon for the website.
- Git - for version control. Using GitPod terminal to commit to Git and push to GitHub.
- GitHub - to save and store the code pushed from Git.
- [Google Fonts](https://fonts.google.com/) - to import font to apply on the website.
- [Jigsaw](https://jigsaw.w3.org/css-validator/) - Css validator.
- [W3C](https://validator.w3.org/#validate_by_uri) - HTML validator.
- [Jshint](https://jshint.com/) - JavaScript validator.
- [Fontawesome](https://fontawesome.com/) - to import icons for the website.
- [Am I responsive](https://ui.dev/amiresponsive) - to show website across a range of devices.
# Testing
## HTML
- No errors were found when passing through the official W3C validator.
### Game Page

![](/docs/html_validator_index.png)

### 404 Error page

![](/docs/html_validator_404.png)
## CSS
- No errors were found when passing through the official Jigsaw validator.

![](/docs/css_validator.png)
## JavaScript
- No issues with the JavaScript [page](/docs/jshint_validator.png).

## Manual Testing
- The game website was manually tested on a desktop PC, Acer Laptop, Samsung A53 phone.
- Tested with Chrome, Microsoft Edge and Firefox.

## Solved Bugs
- There was an error on index.html/game section/cell container when I was validating it, saying "this Attribute not allowed on element div at this point". I fixed the problem by changing to id attribute. 
## Known Bugs
- Not that I know of.
# Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
- Navigate to the repository in GitHub
- Select the Settings tab
- On the left navigation menu, under Code and Automation, select Pages
- Select Deploy from branch under source
- Select the main branch
- After the pages reload, the link to the deployed page will show up at the top.

You can see the GitHub repository by clicking here

## How to Clone
- Log in to GitHub and go to the repository
- Go to the code dropdown and select how you would like to clone and copy the link provided
- Go to the new repo and enter in your workspace terminal "git clone" followed by the link copied.
## How to Fork
- Log in to GitHub
- Go to the repository and click on the fork button towards the top right of the page.

# Credits
## Code
- [MDN Web Docs](https://developer.mozilla.org/en-US/) and [W3 School](https://www.w3schools.com/) - for general helpful tips for JS and CSS.
- The project Love Maths - to implement score counter in JS was helpful.
- Code Institute Sample Readme - for Readme layout.
- [Dev.to](https://dev.to/javascriptacademy/create-a-simple-tic-tac-toe-game-using-html-css-javascript-i4k) - helped me a lot to understand the logic for this game and some code adapted for functions in JS.
- Thank you for these online tutorials from [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified) and [Free Code Camp](https://www.youtube.com/watch?v=P2TcQ3h0ipQ&t=1182s).
## Content
- All content was written by the developer Krisztian Bogar.
## Media
- The favicon icon is made with [favicon.cc](https://www.favicon.cc/) generator.
## Acknowledgements
- Thank you to anyone taking a time and view my second project/first ever webgame.
- [Spencer Barriball](https://www.linkedin.com/in/spencerbarriball/), my mentor for great guidance and advice.
- My wife, a huge thank you! She always supported me no matter what and helped me throughout this project.