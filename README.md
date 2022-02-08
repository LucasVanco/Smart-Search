# Smart Search React Application

This project is an example of how to search for keywords inside a dataset.

### Search algorithm

In order to perform the search of keywords inside the dataset properties `type_tournage` `annee_tournage` `ardt_lieu`, the algorithm uses a simple comparaison of strings to detect if the keyword is present inside the searched properties of the record.

### Presentation

The project is composed of three different components :

* SearchInput.js is the autocomplete input with chips for keyword search
* History.js is a list of all previously searched keyword for easy navigation
* Record.js is a card presenting the information about a record

### Running the project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In order to run the project, first it is mandatory to install the dependencies using `npm install`.

Then to run the project use the command `npm start`

### About

This project was developed using :
* NodeJS v17.4.0
* NPM v8.3.1
* React v17.0.2
* MUI v5.4.0
