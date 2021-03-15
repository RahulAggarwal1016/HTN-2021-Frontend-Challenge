# Hack the North 2021 Frontend Challenge - Rahul Aggarwal

## Hi There!

I'm Rahul and this is my Hack the North 2021 Frontend Challenge submission. I tried my best to leave comments throughout and follow the coding practices outlined in my application.

If you have any questions about my submission feel free to email me at [rahulaggarwal1016@gmail.com](mailto:rahulaggarwal1016@gmail.com).

## Getting Started with the Project

The following steps must be completed in order to get started with this API.

1. Git Clone the Project using `git clone url`

2. Open the project in the code editor of your choice (i.e VsCode) and cd into the root main directory

3. Install the project's dependencies (listed more indepth below) by running `npm install`. This command will require that [node.js](https://nodejs.org/en/) be installed.

4. Run `npm start` to start the application (visit http://localhost:3000/ to view the project)

## Part 2 Writeup

1. Walk us through your development process as you worked on this project. How did you plan out the structure and design of it? How did decide on the tools you've used? Did you encounter any problems? And if so, how did you solve them? Are there any areas of your code that you're particularly proud of or want to point out?

### Tools

Before writing any actual code, I took some time to throughly think through the different tools and packages I would use to create my project. The ones I ended up installing are as follows.

```
    "@auth0/auth0-react": "^1.3.0",
    "axios": "^0.21.1",
    "dotenv": "^8.2.0",
    "react": "^17.0.1",
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^2.0.3",
```

### React

I chose React because it is a fairly popular frontend javascript library meaning that there is a ton of support online I could refer to if I ever got stuck. More importantly, React is great for creating modular and dynamic components, which I knew I would need to build in order to efficiently display all of Hack the North's events. Additionally, having used React quite a bit before I felt confident that I could design a performant app that would be performant and well-put together.

### Axios

I decided to use Axios as my fetching library simply because it is extremely simple to use and less verbose than other options such as Fetch.

### Auth0

Given that I would need to implement basic user authentication (in order to hide private events from non-logged in users) I chose to use Auth0 as a way to do that. Auth0 is great for setting up quick authentication and has great documentation for use in React. As well, Auth0 persists a user's log in state and grants access to the "user" object in any component (similar to using React Context API).

### Dotenv

I used Dotenv to be able to use enviornmental variables in my React application to hide sensitive information such as my Auth0 Providers' client and domain id's.

### Semantic Ui-React/CSS

Lastly, I went with Semantic UI React as my styling package because it had specific prebuilt components I could use to help me streamline the stying aspect of the project. As well, using Semantic UI would help ensure that my project's design looked both appealing and consistent

## Project Structure

While deciding upon how to structure and organize my project's files, I kept in mind that I wanted the project to be readable, scalable and take advantage of React's modular/resuable nature. Starting with `App.js`, this is meant to be a top-level file and thus I did not want any logic to go in here. I kept it extremely simple by just having a Menubar and Events component. Since the Menubar would contain the user login and logout buttons, it made sense to include the Auth0 logic in this component. From here, I moved onto the "Events" component, which is where I would fetch the required data from the HTN APi, save it in the component's state and display it on the project's root page. After grabbing the data and seeing the amount of information for each event, I created an EventCard component to help format each event on the page. This was necessary since if I had decided not to create this component, `Event.js` would be a long and convoluted file. The more I created, the clearer it became where to place specific components and logic i.e. the searchbar, keyword search etc.

## Problems & Solutions

1. The first issue I had was simply displaying all the different events and avoiding any undefined behaviour for events that were missing certain properites. This was a pretty simple fix as I aftering view the data in postman, I got a better understanding of it's structure and was able to display each element accordingly. Additionally, I took certain precautions (i.e. ensuring that I was always safely accesing object proprties) by adding "and" statements within my jsx templates.

2. The second issue I had was retrieving each event's related events from my original array. I ended up mapping over each event and subsequently each related events "id" to grab the information I needed. Although this solution may not have been the most efficient, this operation only happens once upon component load so in the longterm it won't be too costly.

3. Styling was another area I had a little bit of an issue with. At the beginning I tried using styled components however the look of the home page was not very appealing and looked a little bit sloppy. At that point I switched to Semantic UI to use their pre-made css styles as well as to embed my own in-line styles. I am quite pleased with how the project turned out since it's styling is consistent, interesting and responsive to a certain degree.

## Proud Areas of Code

Overall, I am extremely proud of the way I organized and structured my application. Each code file seems readable, easy to understand and made use of React's reusable structure quite well in my opinion. Regardless, if there was one area of my code in particular that I am proud of I would say is the way the search functionality turned out and was executed. I started by creating a SearchBar component that would take a keyword and onChange function as props. That onChange function would execute everytime the user would type into the search bar. It would then take that input up to the SearchBar's parent component and filter the data array only for items that started with that input. At that point, I updated my "data' state the hold the new filtered array, which intern refresh the EventsCard components Note that to preserve the original data array I made a dataDefault variable which is set once upon component load. As well, someone can search for specific event types by typing either "tech_talk, activity or workshop" into the searchbar. The logic for this function was quite similar to searching for events by title.

2. Given additional time, how would you extend your application to become a fully functional product that thousands of hackers and the general public would use at Hackathon Global Inc.™'s next event?

To extend my application to become a fully functional product there are several I would make. Firstly, rather than fetching data from the HTN Api clientside, I would create a backend server to do so (using Node.js and Express) and then send that data to the frontend. This would be benefitial since API requests could stored in a database, cached and accessed more efficiently (as well there would be less code at the client). Having a server/database would also mean that I could store specific information about each user that logs in and for example send each one emails in the future. Another area I would need to improve upon would be the project's suitability on multiple devices. Right now it works well on Desktops however if one were to visit the project on a smaller screen, phone or table the styling would become deformed. This would be a major turnoff for mobile users and thus I would need to add styling for different screens.

### Considerations

*Is the code written and documented such that a developer who is unfamiliar with the code can understand it relatively quickly?*

I tried to make sure that every javascript file was relatively short and concise (using reusable components) so that it would be easy to digest and understand what is going on.

Throughout my code I tried my best to leave comments throughout and describe weird/intuitative blocks of code so so that a developer who is unfamiliar with the code can begin making changes. I have also included some basic "getting started" instructions to assist junior developers with getting the project up and running.

*Is your project structured in a way that is extensible and scalable? For example, if we wanted to add more events or event types, would it be possible to do so easily?*

Since the beginning of the project's creation I made sure to design it in such a way that it is extensible and scalable. Indeed, I kept in my mind that in the fact that in the future one may choose to add more events, remove certain properties or change event types all of which would be handled based upon the project's current structure. For example, even though most events have only one speaker, I made sure to still map over the array incase there are more in the future. Additionally, right now the search bar is able to search for events based upon their type (i.e. activity, tech_talk or workshop) however this functionality would still hold with more event types.

*Are you following best practices to make sure the project is maintainable if development were to continue on it?*

I believe that I am following the best practices to make sure that the project is maintainble if development were to continue on it. For instance, I make use of a helper function to simplify my code, used the most update to date javascript syntax as well as hide my sensitive data with enviornmental variables.