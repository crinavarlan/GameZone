## GameZone
 
### What is this app for?

GameZone is a source of information regarding games which also provide the possibility to rent different games.
 
### What does it do?

The user can read the latest news about games, can discover the new releases and also, he can watch the newest games trailers. On the "rent" section the user can choose an available game, where he can find some information and also the possibility to borrow it for one week or for two weeks. To do that the user needs to complete a form with his details.
 
## Features
 
### Existing Features
- renting online games
- registration
- possibility to contact support
 
### Features Left to Implement
- User Based Features
    - Login
    - Logout
- GameZone Features
	- Creating separate pages for different types of games (adventure, shooter, racing, )
    - Creating individual pages for each gaming console in rent section (PS4, PC, XBox. )
    - create a new section about games reviews
    -

### Some the tech used includes:
- [bower](https://bower.io/)
    - **Bower** is used to manage the installation of our libraries and frameworks
- [Bootstrap](http://getbootstrap.com/)
    - **Bootstrap** to give our project a simple, responsive layout
- [Bootstrap Carousel Plugin](http://getbootstrap.com/)
    - **Bootstrap Carousel Plugin** for the home page photo slider
- [Glyphicons](https://glyphicons.bootstrapcheatsheets.com//)
    - **Glyphicons** to insert diffrent symbols
- [jQuery](https://jquery.com///)
    - **jQuery** - JavaScript library used for popup video/popup box, datepicker, to validate form in rent application form.
- [npm](https://www.npmjs.com/)
    - **npm** used to help to manage some of the dependencies in our application

 ## Contributing
 
### Getting the code up and running
1. Fork it!
2. Install  **npm** and **bower** 
  1. To install **npm** you need to install firstly Node from [here](https://nodejs.org/en/)
  2. Run the following command:
     `npm install -g bower on Windows  # on Mac/Linux you may need to use sudo`
3. You'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. Install **http-server** using ```npm install -g http-server # this also may require sudo on Mac/Linux``` command
5. Run ```http-server -c-1```. the project will run on [localhost](http://127.0.0.1:8080)
7. Create your feature branch: git checkout -b new-feature
8. Commit your changes: git commit -am 'Add some feature'
9. Push to the branch: git push origin new-feature