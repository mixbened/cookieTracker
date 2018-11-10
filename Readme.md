We are building a simple Web-App. Live Example: https://mixbened.github.io/cookieTracker/

Have fun!

## Part I - Project Setup

In this Section, we will set up a generic Front-End Project. For this we will create a HTML, CSS and JavaScript File, connect them to each other and open up the App locally.

Start by creating a Folder somewhere on your Computer and name it how you want. In our case we do *CookieTracker*. Inside of that Folder create a HTML File and name it *index.html*. Then open that File in a Browser of your Choice (preferrably Google Chrome). Add a Basic HTML Structure and a Heading to your Body-Tag. Do you see it in the Browser? 


    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello from the Cookie Tracker</h1>
    </body>
    </html>

Continue by creating a CSS File named style.css and a JavaScript File named script.js.

Now we have to connect both Files to our HTML. The CSS is linked with the link Tag. Reference the Source in the src-Attribute. The JS is linked via the Script-Tag. Reference the Source via the href-Attribute.

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="style.css">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello from the Cookie Tracker</h1>

        <script src="script.js"></script>
    </body>
    </html>

Note: We are adding the Script at the Bottom of the Bottom because we want our HTML to load before the Script.

For testing the Link, we will add some CSS and JS to those Files and see if the Code gets applied.

cookieTracker/script.js
    
    alert('script connected!')

cookieTracker/style.css

    body {
        background: #444;
        font-family: 'Avenir';
    }

When you refresh the Page, you should see the Alert by the Browser. Moreover, you should see the Styles we changed. If you do so, great. You finished this part. If you don't have a look at those references:

Links to linking css and script

## Part II - HTML Elements

In this Section we will create the HTML Elements we need on the Page and then, we will name them with IDs and Classes that we can address them later with JS and CSS!

These are the Elements we need: 

*Heading
*Number
*Tracking Button
*Clear Button

Heading: 

h1 Tag with Content of your choice. We will not use an ID or Class for this Element, those Tags will stay unique so we can you pick the Element by its Tag.

Then add a span, that will hold our score. Furthermore, we need two Buttons, one of them as increaser and the other one to reset the Score.

cookieTracker/index.html

    <span id="score">0</span>

    <button class="btn" id="tracker">Hit!</button>
    <button class="btn" id="reset">Clear</button>


Got it? Nice Work.

## Part III - JavaScript Logic

Ok, what do we need to make the Game work?

When we hit the Button, we want the Score to increase by one every time. When we hit the clear Button we want the score to reset (=0).

* A variable that represents the score (score)
* A function that increases the score (increaser)
* A function that resets the score (reset)
* An Event-Listener, that runs increaser
* An Event-Listener, that runs reset
* let the span display the Global Variable Score

Try to model those functions on your own. This is the Solution without any Logic. Can you complete it?

cookieTracker/script.js

    // global Score 
    var score = 0;

    // grab Element to show the score
    var scoreDisplay = document.getElementById('score');


    // function for increasing the Score
    function increaser(){
        // increase variable score by one

        // update the scoreDisplay Element
        
    }

    // reset function
    function reset(){
        // set score equal to 0

        // update the scoreDisplay Element

    }

    // event listener on id tracker
    var trackerButton = document.getElementById('tracker');
    trackerButton.addEventListener('click', increaser)

    // event listener on id reset
    var resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', reset);


As you can see in the Comments, we are just missing 4 Lines of Code.
This is what is happening in the script. 

* We declare a variable, that holds the score
* We define two functions. One for increasing, one for reseting it
* Then we add two Event-Listeners and call the two functions on that Event
* Then there is the logic inside the functions, but it's missing
* The most important part belongs inside those functions. We need to display the updated score Variable. Look up *innerHTML* for this and you will need to user the scoreDisplay variable

<details><summary>This is the Solution:</summary>


    // global Score 
    var score = 0;

    // grab Element to show the score
    var scoreDisplay = document.getElementById('score');


    // function for increasing the Score
    function increaser(){
        // increase variable score by one
        score++;
        // update the scoreDisplay Element
        scoreDisplay.innerHTML = score;
    }

    // reset function
    function reset(){
        // set score equal to 0
        score = 0;
        // update the scoreDisplay Element
        scoreDisplay.innerHTML = score;
    }

    // event listener on id tracker
    var trackerButton = document.getElementById('tracker');
    trackerButton.addEventListener('click', increaser)

    // event listener on id reset
    var resetButton = document.getElementById('reset');
    resetButton.addEventListener('click', reset);
</details>

## Part IV - Styling

Let's add some nice CSS to our Page:

Gradient for the Background, color and font-family. We are also adding margin to the Body, so that we'll have a gap between the Frame and the Content:

    body {
        background: #00B4DB;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #0083B0, #00B4DB);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #0083B0, #00B4DB); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        font-family: 'Avenir';
        color: #eee;
        margin: 5% 20%;
        /* centers the Buttons  */
        text-align: center;
    }

Style the Score

    #score {
        /* increase font-size */
        font-size: 10em;
        /* make block element that buttons get shifted to the next line */
        display: block;
        /* center the content */
        text-align: center;
    }

Design the Buttons

    #tracker {
        padding: 1.5em;
        /* shift the other button to the next Line */
        display: block;
        /* centering */
        margin: 0 auto;
        /* circle */
        border-radius: 100%;
        border: 0;
        box-shadow: 1px 1px 1px 1px #0083B0;
        background: #eee;
        font-size: 1.5em;
    }

    #reset {
        /* space to hit button */
        margin-top: 15em;
        background: transparent;
        color: #eee;
        /* corners round */
        border-radius: 5px;
        padding: 0.5em 1em;
    }

Alright, thats our Cookie Tracker App! With this App you learned how to combine basic concepts of HTML, CSS and JS.

Keep up the Hard work!




