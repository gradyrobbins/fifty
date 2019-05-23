# Fifty State Quarters Collector

This project is a single page application bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to view this project:
From your terminal
### `git clone https://github.com/gradyrobbins/fifty.git`
Change the current working directory to your local repository.
### `cd fifty`
Move into the api sub-directory
### `cd api/`

Rename starterdata.json, specifying the old file name and the new name you'd like to give the file, using the below command. This will populate the application with starter data.  Until further notice, any changes made to database.json file while using this application are .gitignored and will not be pushed up to GitHub.  Meaning:  quarters collected during your session are not kept in the API's persistent storage.  yet.

### `git mv starterdata.json database.json`

### `json-server -p 5002 -w database.json`
### `cd .. `
Verify that you are back in the project's root directory, fifty.
Then in your terminal:
### `npm install`
### `npm start`

the npm start command should open [http://localhost:3000](http://localhost:3000) in your browser.

starter login credentials:
`username: grady@22.com`
`p/w: 22`

Here is a link to my Project Proposal, including MVP and ERD:
`https://docs.google.com/document/d/1puk1WsFKxzfspUXPSSiCjTnfAs3dphxjUN9U6h3Vmmk/edit#`