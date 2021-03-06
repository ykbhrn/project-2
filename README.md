# ** SEI Project two: News and Weather**
 
## https://news-worldwide-ykbhrn.netlify.app/
 
## **Overview.**
 
Project 2 was my first experience with pair coding. My partner and I had to create a front end app using **React** and **Axios** to consume an **API** in just over 1 day. We made the decision to build a News and Weather app with 2 separate APIs both had rich resources.
 
Once built our app was deployed using **Netlify**.
 
![News screenshot](images/newspage.png)
 
-------------------------
 
## **Brief.**
 
Use at least one public API into a React application to create a fun or useful product.
 
-------------------------
 
## **Technologies used.**
 
#### Front End:
* **React**
* **Axios**
* Bulma
* SCSS
* React loader spinner
* React router dom
 
#### Dev Tools:
 
* Yarn
* VScode
* Insomnia
* Git
* Github
* Google Chrome dev tools
* Eslint
* Netlify
 
 
-------------------------
 
## **Approach.**

### Timeline 
* Day 1 - Choosing API and Planning project
* Day 2 - Coding
 
#### APIs:
 
For our app, we decided to use 2 separate **APIs** to give a more well-rounded experience. For both, we followed the **documentation** on the *API's* website. We used **Yarn** to install the **Axios** dependency to use our request and return responses in *JSON* rather than using fetch then having to convert to JSON. The structure of the *APIs* required us to pass arguments to our Axios requests to enable specific queries.
 
![Screenshot of API page](images/apis.png)
 
#### Components and general structure:
 
##### News:
 
The structure of the app was created using **React**. We used the *Browser Router, Switch, and Route* from the **React-router-dom** package to layout navigation paths for the app. I created the main Navbar and a sub-Navbar, available only under the news heading on the main navbar. We also decided to exclude navbar and footer from the home page meaning we had to import it, when necessary, rather than putting it in the App.js before the **switch and routes.**
 
![Screenshot of Paths](images/paths.png)
 
We used our sub-navbar to build on our main headlines page and use the **NewsAPI**'s ability to take specific categories and add complexity to our app.
 
In addition to specific news categories, the **API** also offered a range of news in different countries (and languages). I used a *select* to make a drop-down to offer news from around the world. I then used **React's** *onChange* event handler to set the state then pass the user's selected value to the *Axios* request. This enabled our app to display, for example, the *Entertainment news* in *Slovakia* (as seen below).
 
![News From Slovakia](images/newspageSlovakia.png)
![Code for on change](images/codeOnChange.png)
 
#### Weather:
 
We followed a very similar journey setting up our **Weather section**. We used *event listeners* to wait for the user to input their City/Town. **onSubmit** we passed the City to the *Axios* request then set state with the response. Once the state was set we were able to select the data we wanted to display from the *API*.
 
Unfortunately, the free version of the *API* only allowed us to display the current weather and not future weather. This was disappointing but we made the most of the resources we were provided with.
 
![Weather in Madrid](images/weatherMadrid.png)
 
#### Design
 
We made the decision to make the style minimalistic across the app. We used **Bulma** for our initial layout. However, once we had all functionality working we deviated from *Bulma* and used **SCSS** to adapt our design. **Keyframes** were used to animate the home page.
 
 
-------------------------
 
## **Wins and Challenges.**
 
#### Wins:
 
The biggest win from the project was working in pairs with my partner Ed. Our cooperation was very smooth, we were very effective and I enjoyed the process.
 
#### Challenges:
 
As we didn't have a lot of experiences with external APIs, our biggest challenge was finding the right API, learn how to use it, and successfully implement it in the project.
 
------------------------

## Bugs 
Our News API provider, have blocked request coming from Netlify, so the app is working in localhost, but unfortunately right now deployed version doesn't work properly. Weather API works alright, only problems are with the news.

------------------------

## Key learnings 
Before the project, I didn't have a lot of experiences with React, but I learned a lot, and now I have a much better understanding of the technology.
I also learned how to use external APIs documentation, where to find APIs, and how to implement it. 


