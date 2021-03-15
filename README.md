# Hack the North 2021 Frontend Challenge - Rahul Aggarwal

## Hi There!

I'm Rahul and this is my Hack the North 2021 Frontend Challenge submission. If you have any questions about my submission feel free to email me at [rahulaggarwal1016@gmail.com](mailto:rahulaggarwal1016@gmail.com).

To view the final project visit: https://htn-frontend.herokuapp.com/

## Getting Started with the Project

The following steps must be completed to start the Project.

1. Git clone the repository using `git clone https://github.com/RahulAggarwal1016/HTN-2021-Frontend-Challenge.git`

2. Open the cloned folder in the code editor of your choice (i.e VsCode) and cd into project's root directory

3. Install all required dependencies (listed more indepth below) by running `npm install`. This command will require that [node.js](https://nodejs.org/en/) be installed

4. Run `npm start` to start the application in your browser

## Part 2 Writeup

1. Walk us through your development process as you worked on this project. How did you plan out the structure and design of it? How did decide on the tools you've used? Did you encounter any problems? And if so, how did you solve them? Are there any areas of your code that you're particularly proud of or want to point out?

### Tools

Before writing any actual code, I took some time to throughly think through the different tools and packages I would need to create my project. The ones I ended up using are as follows.

```
    "@auth0/auth0-react": "^1.3.0",
    "axios": "^0.21.1",
    "dotenv": "^8.2.0",
    "react": "^17.0.1",
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^2.0.3",
```

### React

I chose React because it is a fairly popular frontend javascript library that has a ton of support online which I could refer to if I ever got stuck. More importantly, React is great for creating modular and dynamic components which I knew I would need to use in order to efficiently display all the events and their data from the HTN Api. Having used React for quite a while, I felt confident that I could design a performant and well-put together web application.

### Axios

I decided to use Axios as my fetching library because it is extremely simple to use and slightly less verbose than other tools such as fetch.

### Auth0

Given that I would need to implement basic user authentication (in order to hide private events from non-logged in users) I chose to use Auth0 as a way to do that. Auth0 is great for setting up quick authentication and has well-written documentation for use in React. Additionally, Auth0 persists a user's login state upon refresh (similar to local storage) and grants access to the "user" object in any component (similar to Redux/React Context API).

### Dotenv

I used Dotenv to be able to use enviornmental variables in my React application to hide sensitive information such as my Auth0 Providers' client and domain id's.

### Semantic Ui-React/CSS

Lastly, I went with Semantic UI React as my styling package because I knew it had specific prebuilt components I could use to help me streamline the stying aspect of the project. As well, using Semantic UI would help ensure that my project had an appealing and consistent design.

## Project Structure

While deciding upon how to structure and organize my application, I kept in mind that I wanted it to be maintainable, scalable, and take advantage of React's component-based nature. Starting with `App.js`, this is meant to be a top-level component and thus I did not want any logic to go in here. I kept it extremely simple by just having a Menubar and Events component. Since the Menubar would conditionallty display the user login and logout buttons, it made sense to include the Auth0 logic in this component. From here, I moved onto the "Events" component, which is where I fetch the required data from the HTN api, save it in the component's state, and display it on the project's root page. After grabbing the data and seeing the amount of information for each event, I created an EventCard component to help format each event on the page. This was necessary since if I had decided not to create this component, `Event.js` would be a long and convoluted file. The more I created, the clearer it became where to place specific logic and components.

## Problems & Solutions

1. The first issue I had was simply displaying all the events and avoiding accessing certain undefined properties. This was a pretty simple fix as I aftering view the data in Postman, I got a better understanding of its structure and was able to adjust my code accordingly. For example, to ensure that I was safely accessing each event's properties, I added logical "and" statements within my jsx templates.

2. The second issue I had was retrieving each event's "related events." I ended up mapping over each event and subsequently each related event's "id" to grab the information I needed. Although this solution may not have been the most efficient, this operation only happens once upon component load.

3. Styling is another area I had a little bit of an issue with. At the beginning I tried using styled components however the look of the home page was a littie sloppy and not very appealing. At this point I switched to Semantic UI to combine their pre-made css styles along with my own.

## Proud Areas of Code

Overall, I am extremely proud of the way I organized and structured my application. In my opinion, each code file is readable and easy to understand. Regardless, if there was one area of my code that I am proud of it would be the search functionality, in particular the way it turned out and was executed.

I started by creating a search bar component that takes a `keyword` and an `onChange` function as props. The onChange function executes everytime the user types into the search bar's input field. It then takes that keyword up to the SearchBar's parent component and filters the original data array only for items that start with that keyword. I then update my `data` state the hold the new filtered array, which then refresh the EventsCard components. Note that to preserve the original data array I made a seperate `dataDefault` state variable which is set once upon the initial fetch. With the search bar someone can filter for specific events by title or event type by entering in "tech_talk, activity or workshop".

2. Given additional time, how would you extend your application to become a fully functional product that thousands of hackers and the general public would use at Hackathon Global Inc.™'s next event?

To extend my application to become a fully functional product there are several changes I would make. Firstly, rather than fetching data from the HTN Api clientside, I would create a backend server to do so (using Node.js and Express) and then send that data to the frontend. This would be benefitial since API requests could stored in a database, cached, and accessed more efficiently (rather then fetching the data everytime the component loads or is refreshed). Having a server and database would not only help reduce the code at the client but also allow me to store specific information about each user that logs in, which could be useful such as for sending future emails. Another area I would need to improve upon would be the project's appearance on multiple devices. Right now the application looks fine on Desktops however if one were to vist on a smaller screen, phone or talet, the styling would be deformed. Along with fixing styling there is also an opportunity here to make the application more appealing by adding custom styles, more images, bold colours, transitions etc. Another feature that would need to be implemented would be the ability to translate the page in other languages (assuming this feature is not built into the browser) so that hackers in all regions can easily read and understand the information presented. Similarily, to accomodate for those with visual impairments I would need to enlarged text in abudandence, refrain from using colours to give out information, be wary of contrasts, etc.

## Considerations

**Is the code written and documented such that a developer who is unfamiliar with the code can understand it relatively quickly?**

I tried to make sure that every javascript file was relatively short and concise (using reusable components) so that it would be easy to digest and understand what is going on. As well, throughout my code I left to describe unintuative or complicated blocks of code so that a developer who is unfamiliar with the it can begin making changes. I also included some basic "getting started" instructions to assist junior developers with getting the project up and running.

**Is your project structured in a way that is extensible and scalable? For example, if we wanted to add more events or event types, would it be possible to do so easily?**

Since the beginning of the project's creation I made sure to design it in such a way that it would be extensible and scalable for the future. Indeed, I kept in my mind the fact that in the future one may choose to add more events, remove information, or change event types, all of which would be handled based upon the project's current structure. For example, even though most events have only one speaker, I made sure to still map over the array incase there are more added in the future. Additionally, right now the search bar is able to search for events based upon their type (i.e. activity, tech_talk or workshop); this functionality would still hold even with more event types.

**Are you following best practices to make sure the project is maintainable if development were to continue on it?**

I believe that I am following the best practices to make sure that the project is maintainble if development were to continue on it. For instance, I make use of a helper function to simplify my code, use the most update to date javascript syntax, hide sensitive data with enviornmental variables etc.

__Phew, this was a long README. If you read all the way to the end thank you very very much, it means a lot to me considering the time and effort I spent on this challenge submission. I had a ton of fun making this project and learned a lot along the way.__
