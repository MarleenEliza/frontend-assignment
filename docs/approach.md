# Airport Finder

## Demo

https://assignment-airport-finder.netlify.app/

## Description

Prototype tool for finding flights from a specific airport.

### Meta Goal

- Demonstrate working style
- Demonstrate coding skills

### App Goal

- Enable users to easily find flights from their chosen airport
- Provide user friendly interface for users to sort their flight results
- Provide an easy-to-use application to improve travel experience
- Provide user with an experience that blends in with the overall Schiphol Group theme

## Functionality

- look up flights from airport with user input
- sort flight results by date and expected time

### Tech stack

- TypeScript → chosen because of more robust, easier coding
- ReactJS → chosen for fast development as well as requirement of the client. I am also more proficient with this framework.
- Tailwind CSS → chosen for time-efficient UI development without compromising custom CSS adjustments.

## Component structure

Follows atomic design for better structure and flexibility in future updates.
https://bradfrost.com/blog/post/atomic-web-design/

## Version control and Code strcuture

### Repository / Branching rules

Following a common git branching model with **kebab-case**
https://nvie.com/posts/a-successful-git-branching-model/

Due to the small scale of this app, I will limit the branches to the below:

```bash
# What I will do for this app
/feature
/hotfix
/main
```

### Development flow

1. dev works on specifically named branch
2. dev pushes PR to be added to the main branch
3. PR gets reviewed and merged

## Thoughts

In a real project, I would confirm the following before coding:

### Schedule

#### Questions

- What does the schedule look like? When will the BE be expected to be provided? When is the design expected to be provided? etc.
- In an internal meeting; how much leeway is there for schedule disruptions?

#### What I will assume for now

I give myself a time limit of 4 hours for coding.

### Team

#### Questions

- How many developers will be working on this project? I will assume 1 (me) for now, but if there are multiple developers I would propose a meeting with the tech lead and project manager all present to make sure we are on the same page.

#### What I will assume for now

- 1 Developer (me)

### Target user

#### Questions

- Is this an app for internal use? For a client to handover? Inhouse app we will sell? Depending on the target user we might have to put more / less focus on UI etc.
- How many users do we expect will use this app at the same time? Since this is a small demo app, I won't implement a Back End, but normally one would need a server to store the flights data.
- Depending on who our client is, what do THEY specifically value as an organization / person? Maybe they care about branding and having everything look and feel a specific way in line with their already established brand. Maybe if it is an app we provide for sale, we should focus more on how to make sure we stand out from the current avaiable apps etc.
- What languages do our users speak? The coding challenge was in English so I am going to only implement English for now, but it might be nice to have multi-language support in the future.
- Concerning user accesibility; how important is this to the client? Should we be wary of users with a vision impairment or color blindness?

#### What I will assume for now

An app Shiphol group provides to passengers. (BtoC) My assumption is based on the fact that `colors.css` has colors named `schiphol-blue` + the fact that the interview is with the Commercial Platform division making it likely to be an app for clients.

- focus on strong UI to appeal to passengers while staying true to the Schiphol theme
- focus on low cost, simplicity due to time constraint of this app.
- focus on asccesibility since we appeal to a large audience instead of internal users

### SEO & Accesibility

#### Questions

- How important is SEO in this application? Would it be perhaps wise to focus on this?
- How important is accesibility in this use case? I thrive to implement a website that can be accesed by almost any user (sight and hearing impaired), but depending on the budget and schedule this is not always feasible.

#### What I will assume for now

For now, I will implement basic SEO practices only:

- be wary of keyword usage
- correctly implement header tags
- Google Analytics tag for monitoring website performance
- adding ALT texts to images
- use informative meta tags

I will also implement basic accesibility practicies:

- be wary of ARIA labels
- add Google Analtics tag to monitor users and be able to reflect later on if we are indeed reaching our target audience

### Back End

#### Questions

- This is dependent on the target user, but what kind of authentiction would be suitable? If it is an app we sell oAuth might be more suitable since users can easily acces it with their already exsisting Goolge account etc. If it is an internal product, we will likely prefer an internal server to ensure security. In some cases, it might not even need authentication.
- What is the expected loading time of 1 API call? Would it be possible to get the data of multiple airports at once?
- Wouldn't it be better to sort in the BE? Oftentimes this is more effecient and provides a better user experience, but of course this depends on the specific use case.
- Would it be possible to only ask for a specific batch of the API? So a REST API pagination approach with `limit` and `offset`?
- Would it be possible to add more details to the flight information? Think of coordination info etc. with which we might enhance the UI and UX.

#### What I will assume for now

- I assume this app is for passengers (BtoC), so I will have no authentication flow.
- For this prototype, the backend will be mocked using flights.json and fetched as if from an API with `Fetch API`

### Design

#### Questions

- Is there a certain design theme in mind? I have understood that there is a specific color scheme but what about fonts? What about the overall `feeling / atmosphere` we want to convey as Schiphol Group?
- What will be the target devices and browsers? Should we support older versions of lets say Iphone 6 ? Am I even correct in assuming that this is an app meant for both phones and pcs?
- Does customizability matter in this project? If speed is improtant but UI is not, using a UI framework like Material UI can someitmes be a good solution.
- Am I correct in assuming that the flightnumber is the data most relevant to the target user? Based on my own experience, I want to see the flight number when looking at flights data of an airport, but this interpretation might not be correct. I would normally ask if we have any data on what our users WANT to see and use that information to shape my UI design.

#### What I will assume for now

- Focus on the current [main browsers](https://gs.statcounter.com/browser-market-share/), Google Chrome, Safari, Edge
- Mobile first approach to ensure accessibility for travelers on the go.
- Using TailwindCSS to support efficient, responsive design without limiting custom CSS adjustments. I realize that the assignment asks for to limit the usage of plugins, but I think the usage of TailwindCSS can be justified as it is a lightweight, highly customizable plugin that can greatly improve the development speed whilst maintaining a strong focus on UI.
- I will assume that the target user is most interested in seeing the `flight number`.

### State management

#### Questions

- What is the presumed scale of this app? Does the `Airport Finder` interact with other parts of a bigger app for example? In that case we would likely need to add Redux to ensure a smoother application.

#### What I will assume for now

I will integrate a simple context based state managment due to the time limit and small scale of this application.

## Testing

### Accesibility

I always aim to adhere to the [WACG guidelines](https://www.w3.org/TR/WCAG21/) to ensure an accesible website for as many users as possiblie.
I will check the accesibility score with [accesibility chekcer](https://www.accessibilitychecker.org). In a production project, I would normally ask if it was possible to have a paid option, but I will keep things simple for now and aim for no critical issues on the accesibility checker.

### Browser compatibility

Normally I would do this more extensively, testing all devices and browsers in scope, but for this projecct I will keep it to a simple test in the 3 target browsers.

### Unit Testing

If there was communication with BE, I would normally write specific Client classes that would satisfy specific business needs. The structure of this would depend on the API and the businness needs, but it would look something like this. One Client would server 1 specific purpose.
Before writing the actual clients, I would write unit tests to go with them and have them reviewed by the team, so I can be sure of their functioning and that the functionality of the client meets the business needs.

These tests would be coded and run in Jest.

```bash
FlightClient -> handles all API calls to `/flights`.
```

### Intergration Testing

I will not implement that in this app due to the time limit and scale, but normally I would use end-to-end (E2E) testing tools like Cypress.

## Approach

1. write this README with thoughts and questions I would normally ask BEFORE coding.
2. Decide on a simple UI and UX
3. Plan component structure (see different docs file)
4. Decide on state management and types with simple `flightsApiTypes.ts` and `FlightsContext.tsx`
5. Code components according to atomic design
6. Code functionalities with focus on strong UX
7. Add UI with TailwindCSS
8. Test

## Future enhancements

- integrating real BE
- adding e2e testing
- added more details to enhacne the UX such as the searchResults dissapearing once the focus is gone from the input component.
- prove a better pc UI
- adding more elborate accesibility testing
- adding a more specific UI UX that statisfies the Schiphol Group standards and regulations
- add error handling; fallbacks for when components cannot render to generic Error components, error page for bigger errors, error UI for user to show auth related issues etc.
- adding more features like extensive sorting, filtering, or a map with backend coordinates, based on business needs.
- Once I was almost finished, I realized that I might have misunderstood the assignment a bit; I have made an **airport** finder which shows a maximum of 5 airports listed when searching. Rereading the assignment, I see that it should have been **flights** that were displayed instead. I apologize for the confusion, I do not have time to adjust this anymore, but in a real world project, this misunderstanding would have been prevented due to my initial design and goal questions. I would have ensured before coding, that I was in fact creating the right solution for this specific project.
