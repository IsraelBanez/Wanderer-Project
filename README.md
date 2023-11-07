# Wanderer
A small side project to exercise the usage of a full-stack that utilizes: 
- React <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" width="25" height="20" >
- Node <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" width="35" height="20" >
- Material UI <img src="https://v4.material-ui.com/static/logo.png" width="25" height="25" >
- Spring Boot <img src="https://vscjava.gallerycdn.vsassets.io/extensions/vscjava/vscode-spring-boot-dashboard/0.13.2023072200/1689984300042/Microsoft.VisualStudio.Services.Icons.Default" width="25" height="25" >
- MySQL <img src="https://cdn-icons-png.flaticon.com/512/5968/5968313.png" width="25" height="25" >
- Google Maps API <img src="https://ubilabs.com/media/pages/google-maps/api-sdk/4b8b4e5aff-1695915127/google-maps-icon-api-13.png" width="55" height="25" >
- PostMan <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" width="25" height="25" >
- Three <img src="https://global.discourse-cdn.com/standard17/uploads/threejs/original/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751.png" width="25" height="25">

## Members
- Israel Banez

## Purpose
The purpose of this project is to build a website that utilizes React to gather user input (frontend) regarding their first name, last name, and location from which they are from.
Then, given this information, we use Spring Boot to handle the logical management (backend) of this data, which is stored in a MySQL database. Management such as adding "Wanderers" to
the database and retrieving them back from the database to be displayed for all. Other logic outside Spring Boot is a search query built to display Wanderers that other users seek. 
Basically, the idea stems from maps that people see in restaurants or other tourist attractions where people put pins on where they are coming from. 

## Overall Status
The project operates as intended, although it is just a bare project for now. The UI still needs working on and additional features are intended for the future
such as a graphic display of a map with pins on it, search query improvements, and the option to display images. 

## Quickstart (for running locally)
0a.) Install the necessary sources to run this such as: <br />
- [Node](https://nodejs.org/en), Java, Maven, Spring Boot, [MySQL](https://dev.mysql.com/downloads/installer/), [Material UI](https://mui.com/material-ui/getting-started/installation/)<br />

0b.) Install dependencies:<br />
- ``` npm i ``` <br />

1.) Get a [Google Map API Key](https://developers.google.com/maps/documentation/javascript/get-api-key) to run the location feature.<br />
2.) Clone the Repository.<br />
3.) Fill in the Google Maps API key in the "wandererfrontend/src/components/LocationForm.js" file<br />
4.) Fill the "wanderersystem/src/main/resources/application.properties" files with the necessary [resources](https://spring.io/guides/gs/accessing-data-mysql/) for a MySQL database.<br />
5.) ``` cd wanderersystem ``` and run the Spring Boot app.<br />
6.) ``` cd wandererfrontend ``` and run the React App.<br />

## Demo
Desc: The "home" page where users can interact with the 3D canvas. There is a sidebar menu at the top right to navigate to other sections. <br />
It is a single page that slides up and down to display sections. <br />
<img src="https://github.com/IsraelBanez/Wanderer/assets/59572812/d5431b1c-f791-4d08-a67c-6d91e5fccf56" >
<br />
Desc: The sections currently available are the "user form" section which allows users to input their information and have it stored. <br />
And the "wanderer display" section that allows users to see who has visited. <br />
<img src="https://github.com/IsraelBanez/Wanderer/assets/59572812/a9213be6-76ab-4c95-9fa5-7b672ea7be12">


