//create view: set view=nombre&& npm run view

const view = view => `./src/views/${view}/${view}.app.jsx`

module.exports =  {
    home:  view `home`,
    state: view `state`,
    request: view `request`,
}