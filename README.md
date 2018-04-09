## GameZone
 
### What is this app for?

GameZone is a source of information regarding games which also provide the possibility to rent different games.
 
### What does it do?

The user can read the latest news about games, can discover the new releases and also, he can watch the newest game trailers. In the "rent" section the user can choose an available game, where he can find information regarding the game and also the possibility to borrow it for one or two weeks. To do that the user needs to complete a form with his details.
 
## Features
 
### Existing Features
- renting online games
- possibility to contact support
- news about games
- possibility to watch trailers
 
### Features Left to Implement
- User Based Features
    - Login
    - Logout
- GameZone Features
	- Creating separate pages for different types of games (adventure, shooter, racing, )
    - Creating individual pages for each gaming console in rent section (PS4, PC, XBox. )
    - create a new section about games reviews

### Technologies used:
- [Bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks
- [Bootstrap](http://getbootstrap.com/)
    - I've used **Bootstrap** - to give a simple and responsive layout to the project and also to make some grid layouts
- [Bootstrap Carousel Plugin](http://getbootstrap.com/)
    - I've used **Bootstrap Carousel Plugin** for the home page photo slider
- [Glyphicons](https://glyphicons.bootstrapcheatsheets.com//)
    - I've used **Glyphicons** to insert different symbols
- [jQuery](https://jquery.com///)
    - I've used **jQuery** library for popup video/popup box, datepicker and for validate the form in "rent it" section.
- [npm](https://www.npmjs.com/)
    - **npm** is used to help to manage some of the dependencies in the application
    
### Testing:
- JavaScript tested manual
- CSS and HTML checked with some online validator 
- The responsive part was tested with blisk browser

 ## Contributing
 
### Getting the code up and running
1. Clone or download it!
2. Install  **npm** and **bower** 
  * To install **npm** you need to install firstly Node from [here](https://nodejs.org/en/)
  * Run the following command:
     `npm install -g bower on Windows  # on Mac/Linux you may need to use sudo`
3. You'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. Install **http-server** using ```npm install -g http-server # this also may require sudo on Mac/Linux``` command
5. Run ```http-server -c-1```. the project will run on [localhost](http://127.0.0.1:8080)
6. Create your feature branch: git checkout -b new-feature
7. Commit your changes: git commit -am 'Add some feature'
8. Push to the branch: git push origin new-feature