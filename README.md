<p></p>
<p align="center">
  <img width="230" src="https://github.com/Leoocast/Prakma/blob/master/dist/img/new_prakma_logo.png?raw=true" alt="Logo"/>
</p>
<h1 align="center">Prakma.js</h1>
<h3 align="center">Made with  ❤️ to everyone who loves JSX</h3>
<p align="center">
<img alt="Downloads" src="https://img.shields.io/npm/dw/prakma?label=Downloads" height="20"/>
<img alt="Downloads" src="https://img.shields.io/npm/l/prakma?color=informational&label=License" height="20"/>

<a href="https://www.npmjs.com/package/prakma/">
<img alt="NPM Version" src="https://img.shields.io/npm/v/prakma?label=Version" height="20"/></a>
<img alt="Downloads" src="https://img.shields.io/github/last-commit/leoocast/prakma?color=blueviolet&label=Last%20commit" height="20"/>
</p>
<p align="center">
  JS framework to write JSX
</p>


* **Simple**: You don't have to worry about compile, the webpack preloaded config does it for you.
* **Powerful**: Supports state, import statement, async functions, children inside components, sass, and more!.
* **Awesome**: Comes with an easy to handle file structure to make your apps.
<!-- * **Bridge**: You feel uncomfortable with React? Prakma can help you to get used with the component logic. -->


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#installation)

## ➤ Installation

#### Git clone (recommended)
```javascript
git clone https://github.com/Leoocast/Prakma.git
```
```javascript
npm install
```

#### npm

```javascript
npm install prakma
```
Linux / Mac or Windows
<p> Don't worry if you see some errors in the console after run this commands.</p> 

```javascript
npm explore prakma -- npm run export-linux
```

```javascript
npm explore prakma -- npm run export-windows
```



```javascript
npm install
```



The next step is open `dist/home.html`, if you see the Prakma logo, you have done great!😄

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#getting-started-quick)


## ➤ Getting Started 

This is the tree of files we have initially:
```
├── 📁dist
│   ├── 📁img
│   ├── 📁js
|   |	├──📁home
|   |	|   └── home.js
|   |	└── 📁prakma
|   |       └── prakma.js
|   └── home.html
└── 📁src
    ├── 📁components
    └── 📁views
	├── 📁home
	|   ├── 📁components
	|   |    ├── welcome.style.sass
	|   |    ├── welcome.code.js
	|   |    └── welcome.component.jsx
	|   └── main.jsx
	└── 📁home.app.jsx
```

## 📁 dist

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

## 📁 src

This is the cool part, we have 3 main folders here.
* components: Where all our general components will live.
* prakma: Just a folder to save my love, prakma.js.
* views : I'm going to explain this one...

### | 📁components
This folder is where you gonna save your global components of the project.

### | 📁views 
>This structure is suggested by me, doesn't mean that you have to use it, but is what I recommend.

We should have a folder for every view. Continuing with the example of Contact, let's suppose we have a Form component too. This should be our structure.
```
📁views
├── 📁contact
|   └── 📁components
|       ├── 📁form
|	|    ├── form.component.jsx
|	|    ├── form.code.js
|	|    └── form.style.sass
|     	├── main.jsx
|       |── main.code.js
|       └── main.style.sass
└── contact.app.jsx
```
#### | 📁 components 
Here we have to put every component will be use in our main script. I like to have a folder for every component and 3 files inside:
 - .jsx (our component, a function returning jsx).
 - .js (component logic, every function that our component jsx gonna need).
 - .sas (styles).

#### |📁 components -> 📑 main.jsx
Like the name said, this is our main view file. This is where we assemble our components.

#### | 📑 contact.app.jsx 
Every view must have an entry point, in this case, for our example will be `contact.app.jsx`.

```javascript
import { Main } from  './components/main'
  
const  app = document.getElementById('app')
app.appendChild(Main())
```
And you have to add the route of our new view in the entry property inside `webpack.config.views.js`.

```javascript
module.exports =  {
    contact: view `contact`,
}
``` 

## ➤ State
#### So cool! but where is the state? 🤔
We have a global state here, so, how can we manage it?

If we want to use it, we have to import the state first that is inside of:
```
📁libs
└── 📁prakma
    └── prakma.js
```

```Javascript
import { setState, getState } from "../../../libs/prakma/prakma";
``` 
Suppose we have a user we want to store, just do this:
```Javascript
setState({user})
``` 
If we want to retrieve the object:
```Javascript
const user = getState().user
``` 
#### Ok, we have an internal state. Now, if I want to update the view when the state changes?

Well, here is a little different from React. Suppose we want to print the user info, for that we must write this type of component.
```JSX
export const User = () => (
	<div class="user">
		<div>##user.name##</div>
		<div>##user.age##</div>
		<div>##user.occupation##</div>
	</div>
)
```
And our object in the state must be stored like this:
```Javascript
const user = {
	name: "Leo",
	age: 20,
	occupation: "Engineer"
}

setState({user})
```
We can modify the object every time we want:
```Javascript
setState({user: {age: 22}})
```
At the moment we do that, our view will be updated.

**Important note**:
This only works for objects, I'm working in print an array with his key and something like React, wait for that in the nexts months.

## ➤ Fetch / Request an API
With Prakma you can easily make a request. You can do it importing the request object:
```Javascript
import { Request } from '../../request/request'

const morty = await Request.GET('https://rickandmortyapi.com/api/character//2')
```
That's the raw form, but you can do it better with a Prakma controller, but first you have to config the host in `api/config.json.js`:
```Javascript
export const config = {
    server: 'https://rickandmortyapi.com/api/'
}
```
Then, create a controller file in `api/controller`, in this case `characterController.js`:
```Javascript
import { PrakmaController } from "./controller";

class CharacterController extends PrakmaController{
    constructor(){
        super('character/')
    }

    async getMorty(){
        return this.get('2')
    }
}

export const characterController = new CharacterController() 
```
And in your main view, just import the object from the `characterController` and call the method `getMorty()`:
```Javascript
import { characterController } from '../../../libs/api/controller/characterController'

//You can do this
characterController.getMorty().then(morty => {
    //awesome code
})

//Or this
const morty = await characterController.getMorty()
```


## ➤ DOM
#### Goodbye `document.getElementById` hi `get` 

Prakma has a lot of methods than can help you to code by not taking care of the DOM methods, just use a help method inside `libs/utils/dom.code`. I'm working in the documentation for this.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#getting-started-quick)

## ➤ Package.json scripts

| Script name | Description |
|-------------|-------------|
| watch | Start watching our files to compile any change in `dist/js/viewName/viewName.js`    
| build | Compile and minify our files. They will be in `build/js/viewName/viewName.js`
|**Export scripts**|
| export-linux | This script just must be used to export the prakma files out of node_modules after installation.
| export-windows | This script just must be used to export the prakma files out of node_modules after installation.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#templates)

## ➤ License
	
Licensed under [MIT](https://opensource.org/licenses/MIT).

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#templates)

## ➤ FAQ
### Where can I see examples?

You can see some here: [PrakmaExamples](https://leoocast.github.io/PrakmaExamples/dist/home)

### How can I get involved?

Create an issue or pull-request. You are also very welcome to throw me a message at [@leoocast10](https://twitter.com/leoocast10).

### How can I support you?

There are lot's of ways to support me! I would be so happy if you gave this repository a star, tweeted about it or told your friends about this little corner of the Internet ❤️


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#contributors)

That's all for now folks.
