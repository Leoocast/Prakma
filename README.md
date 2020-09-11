<p></p>
<p align="center">
  <img src="https://github.com/Leoocast/Prakma/blob/master/dist/img/prakma.png?raw=true" alt="Logo"/>
</p>
<h1 align="center">Prakma.js</h1>
<h3 align="center">Made with  ❤️ to everyone who loves JSX</h3>
<p align="center">
<a href="https://www.npmjs.com/package/prakma/readme">
<img alt="NPM Version" src="https://img.shields.io/npm/v/@appnest/readme.svg" height="20"/></a>
<a ><img alt="Dependencies" src="https://img.shields.io/david/andreasbm/readme.svg" height="20"/></a>
<a href="https://github.com/Leoocast/Prakma/contributors"><img alt="Contributors" src="https://img.shields.io/github/contributors/andreasbm/readme.svg" height="20"/></a>
<a href="https://github.com/Leoocast/Prakma/graphs/commit-activity"><img alt="Maintained" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" height="20"/></a>
	</p>

<p align="center">
  A custom JS library to write JSX syntax </br>
</p>


* **Simple**: You don't have to worry about compile, the webpack preloaded config does it for you.
* **Powerful**: Supports import statement, async functions, children inside components, sass, and more!.
* **Awesome**: Comes with an easy to handle file structure to make your apps.


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#installation)

## ➤ Installation

```javascript
npm install prakma
```

The package is installed inside node_modules, you have to go there and copy all the files inside prakma, then bring it to your root folder.

Does anyone know how to deploy an npm command that does it for me? tell me please.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#getting-started-quick)


## ➤ Getting Started 

This is the tree of files we have initially:
```
├── dist
│   ├── img
│   ├── js
|	|	├── home
|	|	|	└── home.js
|	|	└── prakma
|	|		└── prakma.js
|   └── home.html
└── src
    ├── components
    ├── prakma
    └── views
		├──	home
		|	└── components
		|		├── welcome
		|		|	├──	welcome.component.jsx
		|		|	└── welcome.style.sass
		|		└── main.jsx
		└── home.app.jsx
```

## dist

Here is your compiled code, here you have a folder for every view you made in src. 
For make an another view, you just have to add something like this to your new html. Suppose that we have a view called Contact.

```html
<body>
	<div id="app"></div>
	<script src="js/prakma/Prakma.js"></script>
	<script src="js/contact/contact.js" type="module"></script>
</body>
```

Look at this div: `<div id="app">` here is where our view will be rendered.
Noticed that we have to call Prakma.js before our view.

## src

This is the cool part, we have 3 main folders here.
* components: Where all our general components will live.
* prakma: Just a folder to save my love, prakma.js.
* views : I'm going to explain this one...
### views 
>This structure is suggested by me, doesn't mean that you have to use it, but is what I recommend.

We should have a folder for every view. Continuing with the example of Contact. This shoud be our structure.
```
views
	├──	contact
	|	└── components
	|		├── form
	|		|	├──	form.component.jsx
	|		|	├── form.code.js
	|		|	└── form.style.sass
	|		├── main.jsx
	|		├── main.code.js
	|		└── main.style.sass
	└── contact.app.jsx
```
#### [Folder] - components
Here we have to put every component will be use in our main script. I like to have a folder for every component and 3 files inside:
	- .jsx (our component, a function returning jsx)
	- .js (component logic, every function that our component jsx gonna need)
	- .sas (styles)

#### So cool but where is the state?
We don't have state like React here, so, how can we manage it?
We can handle it with vanilla js with an object structure. This is how our contact code gonna looks like: 
```Javascript
export const code = {
	
	//---- Your logic here ----		
	
	init: () => {
		//--- Things you want to load ---
	}
}

code.init()
``` 
Suppose that we have a variable that we wanna pass it to another component, we can do this:
```Javascript
export const code = {
	propertyWeWantToShare: []
}
``` 
And in our ```main.jsx```  :
```JSX
import { code } from './main.code'
import { Form } from './form/form.component.jsx'

export const Main = () => (
	<div className="container">
		<Form propertyToShare={code.propertyWeWantToShare}/>
	</div>
)
```
So,  what does this all mean? It means that every object we wanted to share between components, it must live inside our 
`main.code.js` of the view. Remember a React rule, "everything flows down in our structure".

#### Where are gonna rendered our files?
Every view must have an entry point, in this case, for our example will be `contact.app.jsx`.
```JSX
import { Main } from  './components/main'
  
const  app = document.getElementById('app')
app.appendChild(Main())
```
And you have to add the route of our new view in the entry property inside `webpack.config.js` and `webpack.prod.config.js` .
```JS
entry: {
	contact: path.resolve('./src/views/contact/contact.app.jsx'),
},
```
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#getting-started-quick)

## ➤ Package.json scripts

| Script name       | Description                                      |
|-----------------------|--------------------------------------------------|------------------------------
| w        | This script will start watching our files to compile any change in `dist/js/viewName/viewName.js`    
| build         | Compile and minify our files. They will be in `build/js/viewName/viewName.js`

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#templates)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#templates)

## ➤ FAQ

### How can I get involved?

Create an issue or pull-request. You are also very welcome to throw me a message at [@leoocast10](https://twitter.com/leoocast10).

### How can I support you?

There are lot's of ways to support me! I would be so happy if you gave this repository a star, tweeted about it or told your friends about this little corner of the Internet ❤️


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

That's all folks.